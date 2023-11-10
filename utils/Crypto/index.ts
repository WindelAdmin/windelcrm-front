import bcrypt from 'bcrypt'

export function EncryptWithAES (text: string){
  const salt = process?.env?.SALTS || 5
  return bcrypt.hash(text, salt)
};

export function CompareEncrypt(text: string, text2:string){
  const salt = process?.env?.SALTS || 5
  return bcrypt.compare(text, text2)

}
