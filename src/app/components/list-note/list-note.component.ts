import { Component } from '@angular/core';
import { APIService, Note, Notebook } from 'src/app/services/note.service';
import { ZenObservable } from 'zen-observable-ts';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css'],
})
export class ListNoteComponent {
  storeNotes!: Note[]; //Store notes[] of notebook currently selected
  notes: Note[] = []; //Temp variable to display notes[] from notebook / search functionality
  noteId$!: string; //current note selected
  totalNotesFound!: number; //number of notes found from search
  notebook!: Notebook | null; //current notebook selected

  //subscription variable for notes
  private notebookSubscription: ZenObservable.Subscription | null = null;

  constructor(
    private api: APIService,
    private auth: AuthService,
    private componentService: ComponentBehaviourService
  ) {}

  async ngOnInit() {
    //fetch notebookId from componentService
    this.componentService.notebook$.subscribe((data) => {
      if (data === null) {
        this.notebook = null;
        return;
      }
      this.notebook = data as Notebook;
      this.api
        .ListNotes({ notebookNotesId: { eq: this.notebook.id } })
        .then((data) => {
          data.items.map(
            (note) => {(note!.title = this.auth.decrypt(note!.title))&& (note!.description = this.auth.decrypt(note!.description as unknown as string))}
          );
          this.storeNotes = data.items as Note[];
          this.notes = data.items as Note[];
        });
    });

    //subscribe to addNotes observable
    this.notebookSubscription = this.api
      .OnCreateNoteListener()
      .subscribe((event: any) => {
        const note = event?.value?.data?.onCreateNote;
        note.title = this.auth.decrypt(note.title);
        note.description = this.auth.decrypt(note.description as unknown as string);
        this.notes.unshift(note);
      });

    //subscribe to deleteNotes observable
    this.notebookSubscription = this.api
      .OnDeleteNoteListener()
      .subscribe((event: any) => {
        this.notes = this.notes.filter(
          (note) => note.id !== event.value.data.onDeleteNote.id
        );
      });

    //subscribe to updateNotes observable
    this.notebookSubscription = this.api
      .OnUpdateNoteListener()
      .subscribe((event: any) => {
        this.notes = this.notes.map((note) => {
          if (note.id === event.value.data.onUpdateNote.id) {
            const updatedNote = event.value.data.onUpdateNote;
            updatedNote.title = this.auth.decrypt(updatedNote.title);
            updatedNote.description = this.auth.decrypt(updatedNote.description as unknown as string);
            return updatedNote;
          }
          return note;
        });
      });
  }

  //search functionality for selected notebook
  // async onSearch(search: string) {
  //   if (!search.trim()) {
  //     this.notes = this.storeNotes;
  //     this.totalNotesFound = 0;
  //   } else {
  //     this.api
  //       .SearchNotes({
  //         title: { matchPhrasePrefix: search },
  //         notebookNotesId: { eq: this.notebook!.id },
  //       })
  //       .then((data) => {
  //         this.notes = data.items as Note[];
  //         this.totalNotesFound = data.total!;
  //       });
  //   }
  // }

  //delete note from api
  ondeleteNote(id: string) {
    this.api.DeleteNote({ id: id }).then((data) => {
      if (id !== this.noteId$) {
        this.componentService.notebook$.next(null);
        this.componentService.showUpdate$.next(false);
      }
    });
  }

  //show add note component
  showAddNote() {
    this.componentService.showAdd$.next(true);
    this.componentService.showUpdate$.next(false);
  }

  //show update note component
  showUpdateNote(note: Note) {
    this.componentService.showAdd$.next(false);
    this.componentService.showUpdate$.next(true);
    this.componentService.note$.next(note);
  }
}
