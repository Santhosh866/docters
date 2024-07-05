import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteReviewComponent } from './note-review.component';

describe('NoteReviewComponent', () => {
  let component: NoteReviewComponent;
  let fixture: ComponentFixture<NoteReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
