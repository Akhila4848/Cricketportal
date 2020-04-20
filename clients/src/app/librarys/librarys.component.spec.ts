import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarysComponent } from './librarys.component';

describe('LibrarysComponent', () => {
  let component: LibrarysComponent;
  let fixture: ComponentFixture<LibrarysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
