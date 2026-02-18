import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const possibleRoots = [
  process.cwd(),
  path.join(process.env.USERPROFILE || "", ".cursor", "projects", "c-Andres-UCC-INGENIERIA-DE-SOFTWARE-CUARTO-SEMESTRE-Dise-oDeInterfaces-TallerDos-taller-dos"),
];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  if (!name || !/^card[12]\.png$/.test(name)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  let filePath = "";
  for (const root of possibleRoots) {
    const candidate = path.join(root, "public", "images", name);
    if (fs.existsSync(candidate)) {
      filePath = candidate;
      break;
    }
  }
  if (!filePath) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
  const buffer = fs.readFileSync(filePath);
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000",
    },
  });
}
