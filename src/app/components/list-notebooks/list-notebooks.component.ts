import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentBehaviourService } from 'src/app/services/component-behaviour.service';
import { Notebook, APIService } from 'src/app/services/note.service';
import { ZenObservable } from 'zen-observable-ts';
@Component({
  selector: 'app-list-notebooks',
  templateUrl: './list-notebooks.component.html',
  styleUrls: ['./list-notebooks.component.css'],
})
export class ListNotebooksComponent implements OnInit {
  private notebookSubscription: ZenObservable.Subscription | null = null;
  createNotebookVisible: boolean = false;
  createNotebookForm: FormGroup;
  public notebooks: Notebook[] = [];

  constructor(
    private fb: FormBuilder,
    private api: APIService,
    private componentService: ComponentBehaviourService,
    private auth: AuthService
  ) {
    this.createNotebookForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  //Fetch data from API
  async ngOnInit() {
    this.api.ListNotebooks().then((data) => {
      data.items.forEach((notebook) => {
        notebook!.title = this.auth.decrypt(notebook!.title);
      });
      this.notebooks = data.items as Notebook[];
      this.componentService.notebook$.next(this.notebooks[0] || null);
    });
    //create subscription to listen for new notebooks
    this.notebookSubscription = this.api
      .OnCreateNotebookListener()
      .subscribe((event: any) => {
        const notebook = event?.value?.data?.onCreateNotebook;
        notebook.title = this.auth.decrypt(notebook.title);
        this.notebooks.unshift(notebook);
        this.componentService.notebook$.next(notebook);
      });

    //create subscription to listen for deleted notebooks
    this.notebookSubscription = this.api
      .OnDeleteNotebookListener()
      .subscribe((event: any) => {
        this.notebooks = this.notebooks.filter(
          (notebook) => notebook.id !== event.value.data.onDeleteNotebook.id
        );
      });

    //create subscription to listen for updated notebooks
    this.notebookSubscription = this.api
      .OnUpdateNotebookListener()
      .subscribe((event: any) => {
        this.notebooks = this.notebooks.map((notebook) => {
          if (notebook.id === event.value.data.onUpdateNotebook.id) {
            event.value.data.onUpdateNotebook.title = this.auth.decrypt(
              event.value.data.onUpdateNotebook.title
            );
            return event.value.data.onUpdateNotebook;
          }
          return notebook;
        });
      });
  }

  //delete notebook functionality
  async onDeleteNotebook(id: string) {
    this.api.DeleteNotebook({ id: id }).then((data) => {
      this.notebooks = this.notebooks.filter((notebook) => notebook.id !== id);
      this.componentService.notebook$.next(this.notebooks[0] || null);
      this.componentService.showAdd$.next(false);
      this.componentService.showUpdate$.next(false);
    });
  }

  //Create form related functionality
  async onCreateNotebook(input: any) {
    input.title = this.auth.encrypt(input?.title);
    input.user = this.auth.userId;
    this.api.CreateNotebook(input).then((data) => {
      this.createNotebookVisible = false;
      this.createNotebookForm.reset();
      this.componentService.notebook$.next(data as unknown as Notebook);
    });
  }

  //updated notebook functionality
  async onUpdateNotebook(id: string, title: any) {
    if (
      title !== this.notebooks.find((notebook) => notebook.id === id)?.title
    ) {
      this.api.UpdateNotebook({ id: id, title: title }).then((data) => {
        console.log(data);
      });
    }
  }

  //select notebook functionality
  onSelectNotebook(notebook: Notebook) {
    this.componentService.notebook$.next(notebook);
  }

  //show/hide create notebook form
  showCreateNotebookForm() {
    this.createNotebookVisible = true;
  }

  hideCreateNotebookForm() {
    this.createNotebookVisible = false;
  }

  //unsubscribe from subscriptions
  ngOnDestroy() {
    if (this.notebookSubscription) {
      this.notebookSubscription.unsubscribe();
    }
  }
}
