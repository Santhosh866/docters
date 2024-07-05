import { Component } from '@angular/core';
import { NoteViewService } from '../service/note-view.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SuccessService } from '../service/success.service';
@Component({
  selector: 'note',
  templateUrl: './note-review.component.html',
  styleUrl: './note-review.component.scss'
})
export class NoteReviewComponent {
  data: any;
  textareaContent: any;
  textareaPhysicalExamText: any;
  textareaReviewOfSystemsText: any;
  textareaAssessmentText: any;
  id: string ='';

  constructor(private apiService:NoteViewService,private route: ActivatedRoute,private successService: SuccessService) {
     }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('Fetched ID:', this.id);
    });
    const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken) {
      this.apiService.getData(accessToken,this.id).subscribe(
        response => {
          this.data = response;
          this.textareaContent = this.data?.note?.HistoryOfPresentIllnessText;
          this.textareaPhysicalExamText = this.data?.note?.PhysicalExamText;
          this.textareaReviewOfSystemsText = this.data?.note?.ReviewOfSystemsText;
          this.textareaAssessmentText = this.data?.note?.AssessmentText;
          console.log("NoteList API Response",this.data);
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
    } else {
      console.error('Access token is null or undefined');
    }
  }

    // Method to handle form submission
    handleSubmit(): void {
      const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken) {

      const audioId = this.id;
      const noteData = {
        HistoryOfPresentIllnessText: localStorage.getItem('textareaContent') || '',
        ReviewOfSystemsText: localStorage.getItem('textareaReviewOfSystemsText') || '',
        PhysicalExamText: localStorage.getItem('textareaPhysicalExamText') || '',
        AssessmentText: localStorage.getItem('textareaAssessmentText') || ''
      };
      this.apiService.postData(accessToken,audioId, noteData)
      .subscribe(
        (response) => {
          this.successService.showSuccess('Note-review Doc Updated');
          console.log('Note created successfully:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error creating note:', error);
          // Handle error
        }
      );

    }
      // Replace with actual submission logic
      console.log('Text area data submitted!');
      // Implement HTTP request or other actions here
    }
  
    // Method to handle save action
    handleSave(): void {
      // Replace with actual save logic
      this.saveToLocalStorage();
      console.log('Text area data saved!');
      // Implement HTTP request or other actions here
    }

     // Method to load data from local storage
  private loadFromLocalStorage(): void {
    this.textareaContent = localStorage.getItem('textareaContent') || '';
    this.textareaPhysicalExamText = localStorage.getItem('textareaPhysicalExamText') || '';
    this.textareaReviewOfSystemsText = localStorage.getItem('textareaReviewOfSystemsText') || '';
    this.textareaAssessmentText = localStorage.getItem('textareaAssessmentText') || '';
  }

  // Method to save data to local storage
  private saveToLocalStorage(): void {
    localStorage.setItem('textareaContent', this.textareaContent);
    localStorage.setItem('textareaPhysicalExamText', this.textareaPhysicalExamText);
    localStorage.setItem('textareaReviewOfSystemsText', this.textareaReviewOfSystemsText);
    localStorage.setItem('textareaAssessmentText', this.textareaAssessmentText);
  }

}
