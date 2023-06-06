import { Injectable } from '@angular/core';
import { SHA256, SHA512, MD5, AES, PBKDF2, enc } from 'crypto-js';
@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor() {}

  sha256(data: string) {
    return SHA256(data).toString();
  }
  sha512(data: string) {
    return SHA512(data).toString();
  }
  md5(data: string) {
    return MD5(data).toString();
  }
  pbkdf2(data: string) {
    const derivedKey = PBKDF2(data, '!@#$%^&*(POIUYTREW', {
      keySize: 512 / 32,
      iterations: 1000,
    });
    return derivedKey.toString();
  }
  encrypt(data: string, hash: string) {
    return AES.encrypt(data, hash).toString();
  }
  decrypt(data: string, hash: string) {
    return AES.decrypt(data, hash).toString(enc.Utf8);
  }
}
