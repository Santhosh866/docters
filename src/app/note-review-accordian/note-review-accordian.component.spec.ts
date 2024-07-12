import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteReviewAccordianComponent } from './note-review-accordian.component';

describe('NoteReviewAccordianComponent', () => {
  let component: NoteReviewAccordianComponent;
  let fixture: ComponentFixture<NoteReviewAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteReviewAccordianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteReviewAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
