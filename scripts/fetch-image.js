const fs = require('fs')
const path = require('path')
const https = require('https')

const url = 'https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg'
const outDir = path.join(__dirname, '..', 'public', 'images')
const outFile = path.join(outDir, 'landscape.jpg')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function download(u, dest) {
  return new Promise((resolve, reject) => {
    const req = https.get(u, (res) => {
      // follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest))
      }

      if (res.statusCode !== 200) {
        return reject(new Error('Request Failed. Status Code: ' + res.statusCode))
      }

      const file = fs.createWriteStream(dest)
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
      file.on('error', (err) => reject(err))
    })

    req.on('error', (err) => reject(err))
  })
}

;(async () => {
  try {
    await download(url, outFile)
    console.log('Saved image to', outFile)
  } catch (err) {
    console.error('Failed to download image:', err.message)
    process.exit(1)
  }
})()
