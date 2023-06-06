import { Component } from '@angular/core';
import { APIService, Note, Notebook } from 'src/app/services/note.service';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css'],
})
export class UpdateNoteComponent {
  public updateForm: FormGroup;
  private notebook!: Notebook | null;
  private noteId!: string;

  constructor(
    private api: APIService,
    private auth: AuthService,
    private componentService: ComponentBehaviourService,
    private fb: FormBuilder
  ) {
    //update Form initialized
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.componentService.notebook$.subscribe((notebook) => {
      this.notebook = notebook;
    });

    this.componentService.note$.subscribe((note) => {
      this.noteId = note!.id;
      this.updateForm.patchValue({
        title: note?.title,
        description: note?.description,
      });
    });
  }

  //update note from api
  async onUpdate(note: Note) {
    this.componentService.showUpdate$.next(false);
    this.api.UpdateNote({
      id: this.noteId,
      title: this.auth.encrypt(note.title),
      description: this.auth.encrypt(note.description as string),
      notebookNotesId: this.notebook?.id,
    });
  }
  //hide update component
  hideUpdateComponent() {
    this.componentService.showUpdate$.next(false);
  }
}
