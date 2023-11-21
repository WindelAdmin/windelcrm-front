import { CookiesEnum } from '@shared/cookies/Cookies.enum';
import { parseCookies } from 'nookies';
import { decrypt } from '../CryptoService/crypto.service';

export async function getUserCookie() {
  const { [CookiesEnum.windelcrmUser]: userCookie } = parseCookies();
  
  if(!userCookie) return
  
  const { userData, companyData } = JSON.parse(await decrypt(userCookie));
  return {userData, companyData}
}