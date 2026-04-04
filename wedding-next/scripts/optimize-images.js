const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'public', 'photos');

const MAX_DIMENSION = 1200;
const QUALITY = 70;

async function processImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const tempPath = path.join(inputDir, `temp_${filename}`);

  try {
    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .rotate()
      .resize(MAX_DIMENSION, MAX_DIMENSION, { withoutEnlargement: true, fit: 'inside' })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(tempPath);

    const newSize = fs.statSync(tempPath).size;

    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);

    console.log(`${filename}: ${(originalSize / 1024 / 1024).toFixed(1)}MB -> ${(newSize / 1024 / 1024).toFixed(1)}MB (${((1 - newSize / originalSize) * 100).toFixed(0)}% smaller)`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err.message);
  }
}

async function main() {
  console.log('Optimizing images (with auto-rotation)...\n');

  const files = fs.readdirSync(inputDir).filter(f => /\.(jpg|jpeg)$/i.test(f));

  for (const file of files) {
    await processImage(file);
  }

  const totalSize = fs.readdirSync(inputDir)
    .filter(f => /\.(jpg|jpeg)$/i.test(f))
    .reduce((sum, f) => sum + fs.statSync(path.join(inputDir, f)).size, 0);

  console.log(`\nDone! Total photos size: ${(totalSize / 1024 / 1024).toFixed(1)}MB`);
}

main();
