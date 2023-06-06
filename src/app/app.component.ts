import { Component, OnInit } from '@angular/core';
import { APIService, Note } from './services/note.service';
import { ComponentBehaviourService } from './services/component-behaviour.service';
import { AuthService } from './services/auth.service';
import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Notes App';
  showAdd: boolean = false;
  showUpdate: boolean = false;
  masterPasswordToggle!: String;

  constructor(
    private api: APIService,
    private auth: AuthService,
    private componentService: ComponentBehaviourService
  ) {
    // Subscribe to the showAdd$ and showUpdate$ observables
    this.componentService.showAdd$.subscribe((bool) => (this.showAdd = bool));
    this.componentService.showUpdate$.subscribe((bool) => {
      this.showUpdate = bool;
    });
    this.componentService.masterPasswordToggle$.subscribe((data) => {
      this.masterPasswordToggle = data;
    });
    // // Subscribe to the error and success streams for displaying messages in the UI
    // this.componentService.errorStream$.subscribe((data) => console.log(data));
    // this.componentService.successStream$.subscribe((data) => console.log(data));
  }
  ngOnInit() {
    Hub.listen('auth', (data) => {
      if (data.payload.event === 'autoSignIn') {
        const { attributes } = data.payload.data;
        const user = {
          id: attributes.sub,
        };
        this.api.CreateUsers(user);
      }
    });
  }
}
