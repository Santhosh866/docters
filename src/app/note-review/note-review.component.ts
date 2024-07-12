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
  audio_id: string ='';
  onTextChange(newValue: any, key: string) {
    // Handle the text change here
    console.log(`Key: ${key}, New Value: ${newValue}`);
    this.data.note[key]=newValue
    console.log(this.data.note);
  }
  getNoteKeys() {
    return Object.keys(this.data.note);
  }


  constructor(private apiService:NoteViewService,private route: ActivatedRoute,private successService: SuccessService) {
    
    this.route.params.subscribe((params: Params) => {
      this.audio_id = params['id'];
      console.log('Fetched ID:', this.audio_id);
    });
    const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken) {
      this.apiService.getUpdatedData(accessToken,this.audio_id).subscribe(
        response => {
          this.data = response;
          console.log("updates data",this.data);
          });
    
      this.apiService.getData(accessToken,this.audio_id).subscribe(
        response => {
          this.data = response;
          this.data.audio_id = this.audio_id;});
    } else {
      console.error('Access token is null or undefined');
    }
  }

  onSave() {
    console.log('save data:', this.data);
    const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken) {
      this.apiService.postUpdatedData(accessToken,this.data)
      .subscribe(
        (response) => {
          this.successService.showSuccess('Note-review Doc Updated');
          console.log('Note created successfully:', response);
        },
        (error) => {
          console.error('Error creating note:', error);
        }
      );
    }
  }

  onSubmit() {
    // Handle submit logic
    console.log('Submitting data:', this.data);
    const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken) {
      this.apiService.postData(accessToken,this.data)
      .subscribe(
        (response) => {
          this.successService.showSuccess('Note-review Doc Updated');
          console.log('Note created successfully:', response);
        },
        (error) => {
          console.error('Error creating note:', error);
        }
      );
  }
}

    // Method to handle form submission
    // handleSubmit(): void {
    //   const accessToken : string | null = localStorage.getItem('access_token');
    // if (accessToken) {
    //   const audioId = this.id;
    //   this.apiService.postData(accessToken,audioId,this.data)
    //   .subscribe(
    //     (response) => {
    //       this.successService.showSuccess('Note-review Doc Updated');
    //       console.log('Note created successfully:', response);
    //     },
    //     (error) => {
    //       console.error('Error creating note:', error);
    //     }
    //   );

    // }
    // }
    // onSave(): void {
    //   const accessToken : string | null = localStorage.getItem('access_token');
    // if (accessToken) {
    //   const audioId = this.id;
    //   this.apiService.postUpdatedData(accessToken,audioId,this.data)
    //   .subscribe(
    //     (response) => {
    //       this.successService.showSuccess('Note-review Doc Updated');
    //       console.log('Note created successfully:', response);
    //     },
    //     (error) => {
    //       console.error('Error creating note:', error);
    //     }
    //   );

    // }
    // }

    // onTextChange(event: any,value:any) {
    //   this.updateArray[value] = event.target.textContent;
    //   console.log(this.updateArray)
    // }
  

}
