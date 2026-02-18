#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const publicImages = path.join(projectRoot, "public", "images");
const cursorImages = path.join(
  process.env.USERPROFILE || process.env.HOME,
  ".cursor", "projects",
  "c-Andres-UCC-INGENIERIA-DE-SOFTWARE-CUARTO-SEMESTRE-Dise-oDeInterfaces-TallerDos-taller-dos",
  "public", "images"
);

if (!fs.existsSync(publicImages)) {
  fs.mkdirSync(publicImages, { recursive: true });
}

function copyIfExists(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    return true;
  }
  return false;
}

const card1Done =
  copyIfExists(path.join(cursorImages, "card1.png"), path.join(publicImages, "card1.png")) ||
  fs.existsSync(path.join(publicImages, "card1.png"));
const card2Done =
  copyIfExists(path.join(cursorImages, "card2.png"), path.join(publicImages, "card2.png")) ||
  fs.existsSync(path.join(publicImages, "card2.png"));

if (card1Done && card2Done) {
  console.log("Imágenes listas en public/images.");
} else {
  console.log("card1.png:", card1Done ? "OK" : "Falta – copia card1.png a public/images");
  console.log("card2.png:", card2Done ? "OK" : "Falta – copia card2.png a public/images");
  process.exit(1);
}
