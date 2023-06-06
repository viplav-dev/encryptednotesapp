import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-ask-password',
  templateUrl: './ask-password.component.html',
  styleUrls: ['./ask-password.component.css'],
})
export class AskPasswordComponent {
  askMasterPasswordForm!: FormGroup;
  errMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private componentService: ComponentBehaviourService,
    private auth: AuthService
  ) {
    this.askMasterPasswordForm = this.fb.group({
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
    });
    this.askMasterPasswordForm.get('password')?.valueChanges.subscribe(() => {
      if (this.askMasterPasswordForm.get('password')?.invalid) {
        this.errMessage = 'Enter a valid master password';
      } else this.errMessage = '';
    });
  }
  masterPasswordToggle() {
    // this.componentService.masterPasswordToggle$.next(false);
  }

  async onSubmit() {
    const password = this.askMasterPasswordForm.get('password')?.value;
    const result = await this.auth.setMasterPassword(password);
    if (result) {
      this.componentService.masterPasswordToggle$.next('');
      return;
    }
    this.errMessage = 'Master password is incorrect';
  }
}
