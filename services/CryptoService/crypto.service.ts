async function generateKey(): Promise<CryptoKey | any> {
  const aesKey = hexStringToArrayBuffer(process.env.CRYPTO_KEY as string);

  if (!aesKey) {
    console.error('Chave AES não encontrada ou inválida.');
    return null;
  }

  try {
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      aesKey,
      { name: 'AES-CTR' },
      false,
      ['encrypt', 'decrypt']
    );

    if (cryptoKey instanceof CryptoKey) {
      return cryptoKey;
    } else {
      console.error(
        'Erro ao importar a chave: A chave importada não é uma instância válida de CryptoKey.'
      );
    }
  } catch (error) {
    console.error('Erro ao importar a chave:', error);
  }
}

function hexStringToArrayBuffer(hexString: string): ArrayBuffer {
  const bufferLength = hexString.length / 2;
  const buffer = new ArrayBuffer(bufferLength);
  const uint8Array = new Uint8Array(buffer);

  for (let i = 0; i < bufferLength; i++) {
    const byte = parseInt(hexString.substr(i * 2, 2), 16);
    uint8Array[i] = byte;
  }

  return buffer;
}


function arrayBufferToHexString(buffer: ArrayBuffer): string {
  const byteArray = new Uint8Array(buffer);
  const hexArray = Array.from(byteArray).map(byte => byte.toString(16).padStart(2, '0'));
  return hexArray.join('');
}

export async function encrypt(data: string): Promise<string>{
  const counter = new Uint8Array(16);
  const encodedData = new TextEncoder().encode(data);

  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-CTR', counter: counter, length: 64 },
    await generateKey(),
    encodedData,
  );

  return arrayBufferToHexString(encryptedData);
}

export async function decrypt(encryptedData: string) {
  const counter = new Uint8Array(16);
  const decryptedData = await crypto.subtle.decrypt(
    { name: 'AES-CTR', counter: counter, length: 64 },
    await generateKey(),
    hexStringToArrayBuffer(encryptedData)
  );

  return new TextDecoder('utf-8').decode(decryptedData);
}
