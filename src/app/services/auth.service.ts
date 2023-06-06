import { Injectable } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsExports from 'src/aws-exports';
import { APIService, Users } from './note.service';
import { CryptoService } from './crypto.service';
import { ComponentBehaviourService } from './component-behaviour.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userId!: string;
  user!: Users;
  AmplifyAuth!: AuthenticatorService;
  private masterPassword!: string;

  constructor(
    private authenticator: AuthenticatorService,
    private api: APIService,
    private crypto: CryptoService,
    private componentService: ComponentBehaviourService
  ) {
    Amplify.configure(awsExports);
    this.AmplifyAuth = authenticator;
  }
  setMasterPassword(password: string) {
    if (this.verifyMasterPassword(password)) {
      var sha512Hash = this.crypto.sha512(password);
      this.masterPassword = this.crypto.pbkdf2(sha512Hash);
      return true;
    }
    return false;
  }
  getMasterPassword() {
    return this.masterPassword;
  }
  verifyMasterPassword(password: string) {
    const hash256 = this.crypto.sha256(password);
    if (!this.user.hash && !this.user.masterPassword) return true;
    if (this.user.hash === hash256) {
      return true;
    }
    return false;
  }
  encrypt(data: string) {
    return this.crypto.encrypt(data, this.masterPassword);
  }
  decrypt(data: string) {
    return this.crypto.decrypt(data, this.masterPassword);
  }

  isLoggedIn() {
    if (this.AmplifyAuth.authStatus === 'authenticated') {
      this.userId = this.AmplifyAuth.user.username as string;
      return true;
    } else {
      return false;
    }
  }
  updateUserHash(password: string) {
    const hash = this.crypto.sha256(password);
    this.api
      .UpdateUsers({ id: this.userId, masterPassword: true, hash: hash })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    this.setMasterPassword(password);
    this.componentService.masterPasswordToggle$.next('');
  }
  async getUser() {
    await this.api.GetUsers(this.userId).then((data) => {
      this.user = data;
    });
    return this.user;
  }
}
