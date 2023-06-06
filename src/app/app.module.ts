import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { ListNotebooksComponent } from './components/list-notebooks/list-notebooks.component';
import { AskPasswordComponent } from './components/master-password/ask-password/ask-password.component';
import { CreatePasswordComponent } from './components/master-password/create-password/create-password.component';
import { MasterPasswordComponent } from './components/master-password/master-password.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ListNoteComponent,
    UpdateNoteComponent,
    ListNotebooksComponent,
    AskPasswordComponent,
    CreatePasswordComponent,
    MasterPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
