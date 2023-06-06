import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { Users } from 'src/app/services/note.service';

@Component({
  selector: 'app-master-password',
  templateUrl: './master-password.component.html',
  styleUrls: ['./master-password.component.css'],
})
export class MasterPasswordComponent {
  masterPasswordToggle!: String;
  user!: Users;
  constructor(
    private auth: AuthService,
    private componentService: ComponentBehaviourService
  ) {
    this.auth.isLoggedIn();
    this.componentService.masterPasswordToggle$.subscribe((data) => {
      this.masterPasswordToggle = data;
    });
    this.onStartup();
  }

  async onStartup() {
    this.user = await this.auth.getUser();
    const { masterPassword } = this.user;
    if (masterPassword) {
      this.componentService.masterPasswordToggle$.next('ASK');
    }
  }
}
