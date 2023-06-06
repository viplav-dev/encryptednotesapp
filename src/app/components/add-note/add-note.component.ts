import { Component } from '@angular/core';
import { APIService, Note, Notebook } from 'src/app/services/note.service';

import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  notes: Note[] = [];
  public addNote: FormGroup;
  private notebook!: Notebook;
  constructor(
    private NoteService: APIService,
    private componentService: ComponentBehaviourService,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
    //Create Note form group
    this.addNote = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    //Subscribe to notebook$ observable
    this.componentService.notebook$.subscribe((data) => {
      this.notebook = data as Notebook;
    });
  }

  public onAddNote(singleNote: Note) {
    this.NoteService.CreateNote({
      notebookNotesId: this.notebook.id,
      title: this.auth.encrypt(this.addNote.value.title),
      description: this.auth.encrypt(this.addNote.value.description),
      user: this.auth?.userId,
    }).then(() => {
      this.componentService.showAdd$.next(false);
    });
  }
  hideAddComponent() {
    this.componentService.showAdd$.next(false);
  }
}
