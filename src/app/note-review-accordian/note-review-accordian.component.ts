
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute, Params } from '@angular/router';
// import { NoteViewService } from '../service/note-view.service';
// import { SuccessService } from '../service/success.service';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }
// @Component({
//   selector: 'app-note-review-accordian',
//   templateUrl: './note-review-accordian.component.html',
//   styleUrl: './note-review-accordian.component.scss'
// })
// export class NoteReviewAccordianComponent implements OnInit {
//   //noteForm: FormGroup;
//   data: any;
//   id: string ='';

//   // constructor(private fb: FormBuilder) {
//   //   this.noteForm = this.fb.group({
//   //     name: ['E F'],
//   //     note: this.fb.group({
//   //       HistoryOfPresentIllnessText: ['The patient reports no current symptoms or concerns.'],
//   //       ReviewOfSystemsText: ['No signs or symptoms discussed.'],
//   //       PhysicalExamText: ['No physical exam findings reported.'],
//   //       AssessmentText: ['Impression:  No diagnosis provided.\nCurrent Plans:\nMDM: \n This office note has been created with the assistance of ScribeBrain ambient audio technology with patient consent']
//   //     })
//   //   });
    
//   // }
//   constructor(private apiService:NoteViewService,private route: ActivatedRoute,private successService: SuccessService) {
//     this.route.params.subscribe((params: Params) => {
//       this.id = params['id'];
//       console.log('Fetched ID:', this.id);
//     });
//     const accessToken : string | null = localStorage.getItem('access_token');
//     if (accessToken) {
//       this.apiService.getData(accessToken,this.id).subscribe(
//         response => {
//           this.data = response;
//           this.data.id = this.id;
//         }
//       );
//     } else {
//       console.error('Access token is null or undefined');
//     }
//   }
//   ngOnInit(): void {}

//   saveNote() {
//     const updatedNote = this.noteForm.value;
//     console.log('Updated Note:', updatedNote);
//   }
// }