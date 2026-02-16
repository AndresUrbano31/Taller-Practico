#!/usr/bin/env node
const net = require('net')
const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

function isPortFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer()
    // allow program to exit if this is the only active handle
    server.unref()

    server.once('error', () => resolve(false))
    server.once('listening', () => server.close(() => resolve(true)))

    // listen without specifying host so binder checks all addresses (IPv4/IPv6)
    server.listen(port)
  })
}

async function findPort(start = 3000, max = start + 100) {
  for (let p = start; p <= max; p++) {
    // eslint-disable-next-line no-await-in-loop
    if (await isPortFree(p)) return p
  }
  throw new Error('No available ports found in range')
}

;(async () => {
  const requested = parseInt(process.env.PORT || '3000', 10)

  // if a dev lock exists and the requested port is busy, assume a running dev server
  const lockPath = path.join(__dirname, '..', '.next', 'dev', 'lock')
  if (fs.existsSync(lockPath)) {
    const requestedBusy = !(await isPortFree(requested))
    if (requestedBusy) {
      console.log(`A Next dev server appears to be running (lock present). Open http://localhost:${requested}`)
      process.exit(0)
    }

    // stale lock — remove and continue
    try {
      fs.unlinkSync(lockPath)
      console.log('Removed stale .next/dev/lock')
    } catch (e) {
      /* ignore */
    }
  }

  const port = await findPort(requested)
  console.log(`Starting Next.js dev server on port ${port} (requested ${requested})`)

  const cmd = `npx next dev -p ${port}`
  const child = spawn(cmd, { stdio: 'inherit', shell: true })

  child.on('exit', (code) => process.exit(code))
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
