import { Component} from '@angular/core';
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
  textareaContent='';
  textareaPhysicalExamText='';
  textareaReviewOfSystemsText='';
  textareaAssessmentText='';
  id: string ='';

  constructor(private apiService:NoteViewService,private route: ActivatedRoute,private successService: SuccessService) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log('Fetched ID:', this.id);
    });
    const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken) {
      this.apiService.getData(accessToken,this.id).subscribe(
        response => {
          this.data = response;
          this.data.id = this.id;
          // Retrieve the existing array from local storage, or initialize it if it doesn't exist
const storedData = localStorage.getItem('patientDataArray');
let patientDataArray: object[] = [];

// Check if storedData is not null and parse it
if (storedData) {
  patientDataArray = JSON.parse(storedData);
}

// Add the new object to the array
patientDataArray.push(this.data);

// Save the updated array back to local storage
localStorage.setItem('patientDataArray', JSON.stringify(patientDataArray));
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
  


  onSave() {
  }

  onTextChange1(event: Event) {
    const newText = (event.target as HTMLElement).innerText;
    this.textareaContent = newText;
    console.log("1",this.textareaContent)
  }
  onTextChange2(event: Event) {
    const newText = (event.target as HTMLElement).innerText;
    this.textareaPhysicalExamText = newText;
    console.log("2",this.textareaPhysicalExamText)

  }
  onTextChange3(event: Event) {
    const newText = (event.target as HTMLElement).innerText;
    this.textareaReviewOfSystemsText = newText;
    console.log("3",this.textareaReviewOfSystemsText)

  }
  onTextChange4(event: Event) {
    const newText = (event.target as HTMLElement).innerText;
    this.textareaAssessmentText = newText;
  }

}
