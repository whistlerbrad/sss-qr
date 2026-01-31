import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const publicDir = resolve(root, 'public')
const svgPath = resolve(publicDir, 'favicon.svg')
const svg = readFileSync(svgPath)

async function generate() {
  for (const size of [192, 512]) {
    const buf = await sharp(svg)
      .resize(size, size)
      .png()
      .toBuffer()
    writeFileSync(resolve(publicDir, `pwa-${size}.png`), buf)
    console.log(`Wrote public/pwa-${size}.png`)
  }
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
