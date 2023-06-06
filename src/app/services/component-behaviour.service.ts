import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note, Notebook } from './note.service';

@Injectable({
  providedIn: 'root',
})
export class ComponentBehaviourService {
  showAdd$ = new BehaviorSubject<boolean>(false);
  showUpdate$ = new BehaviorSubject<boolean>(false);
  successStream$ = new BehaviorSubject<String | null>(null);
  errorStream$ = new BehaviorSubject<String | null>(null);
  note$ = new BehaviorSubject<Note | null>(null);
  notebook$ = new BehaviorSubject<Notebook | null>(null);
  masterPasswordToggle$ = new BehaviorSubject<String>('CREATE');
  constructor() {}
}
