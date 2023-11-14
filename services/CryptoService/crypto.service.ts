

import { createCipheriv, createDecipheriv, randomBytes } from "crypto"


export function encrypt(text: string): string {
  
  const iv = randomBytes(16)
  
  const cipher = createCipheriv("aes-256-ctr", Buffer.from(process.env.SECRET_KEY as string), iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return Buffer.from(JSON.stringify({ hash: encrypted, iv: iv })).toString('base64')
}

export function decrypt(encryptedText: string): string {
  const hashObj = JSON.parse(Buffer.from(encryptedText, 'base64').toString())
  const decipher = createDecipheriv("aes-256-ctr", Buffer.from(process.env.SECRET_KEY as string), Buffer.from(hashObj.iv))
  let decrypted = decipher.update(hashObj.hash, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}
export function compareDecryptedText(encryptedText: string, referenceText: string): boolean {
  const decryptedText = decrypt(encryptedText)
  return decryptedText === referenceText
}



