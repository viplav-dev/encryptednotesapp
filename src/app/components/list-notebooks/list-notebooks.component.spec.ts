import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotebooksComponent } from './list-notebooks.component';

describe('ListNotebooksComponent', () => {
  let component: ListNotebooksComponent;
  let fixture: ComponentFixture<ListNotebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNotebooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNotebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
