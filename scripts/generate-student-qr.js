import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import QRCode from 'qrcode'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const publicDir = resolve(root, 'public')
const outPath = resolve(publicDir, 'StudentPageQR.png')

const STUDENT_PAGE_URL = 'https://snowboard-instructor.netlify.app/brad-meraly'

async function generate() {
  const buf = await QRCode.toBuffer(STUDENT_PAGE_URL, {
    type: 'png',
    width: 400,
    margin: 2,
    errorCorrectionLevel: 'M'
  })
  writeFileSync(outPath, buf)
  console.log('Wrote public/StudentPageQR.png')
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
