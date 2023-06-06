import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css'],
})
export class CreatePasswordComponent {
  createMasterPasswordForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private componentService: ComponentBehaviourService,
    private auth: AuthService,
    private crypto: CryptoService
  ) {
    this.createMasterPasswordForm = this.fb.group({
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ], // should be equal to password
    });
    this.auth.isLoggedIn();
  }

  masterPasswordConfirm() {
    if (
      this.createMasterPasswordForm.get('confirmPassword')?.dirty &&
      this.createMasterPasswordForm.get('password')?.value !==
        this.createMasterPasswordForm.get('confirmPassword')?.value
    ) {
      this.createMasterPasswordForm.get('confirmPassword')?.setErrors({
        notMatch: true,
      });
      return;
    }
    this.createMasterPasswordForm.get('confirmPassword')?.setErrors(null);
  }
  onSubmit() {
    console.log(this.createMasterPasswordForm.value);
    const masterPassword = this.createMasterPasswordForm.get('password')?.value;
    this.auth.updateUserHash(masterPassword);
   
  }
}
