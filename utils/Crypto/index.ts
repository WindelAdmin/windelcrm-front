import bcrypt from 'bcrypt';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

// export function EncryptWithAES(text: string) {
//   const salt = process?.env?.SALTS || 5;
//   return bcrypt.hash(text, salt);
// }

// export function CompareEncrypt(text: string, text2: string) {
//   const salt = process?.env?.SALTS || 5;
//   return bcrypt.compare(text, text2);
// }
  
const  iv = randomBytes(16);
export function encrypt(text: string): string {

  
  const algorithm = 'aes-256-ctr';
  const cipher = createCipheriv(algorithm, Buffer.from(process.env.SECRETKEY as string), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(encryptedText: string): string {
  const hashObj = JSON.parse(Buffer.from(encryptedText, 'base64').toString())
  
  const algorithm = 'aes-256-ctr';
  const decipher = createDecipheriv(algorithm, Buffer.from(process.env.SECRETKEY as string), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export function compareDecryptedText(encryptedText: string, referenceText: string): boolean {
  const decryptedText = decrypt(encryptedText);
  return decryptedText === referenceText;
}