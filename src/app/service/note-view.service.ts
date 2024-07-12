import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteViewService {
  private apiUrl = '/api/v1/ui-connect/note-review?audio_id=';
  private apiUpdatedUrl = '/api/v1/ui-connect/note-review-update?audio_id=';
  private postApiUrl = '/api/v1/ui-connect/note-review';
  private postUpdatedApiUrl = '/api/v1/ui-connect/note-review-update';
   constructor(private http: HttpClient) {}
 
   getData(accessToken: string,id:string): Observable<any> {
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${accessToken}`    });
 
     return this.http.get(this.apiUrl+id, { headers });
   }
   postData(accessToken: string, note: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`    });
      const body = note

    return this.http.post(this.postApiUrl,body, { headers });
  }
  getUpdatedData(accessToken: string,id:string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`    });

    return this.http.get(this.apiUpdatedUrl+id, { headers });
  }
  postUpdatedData(accessToken: string,note: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`    });
      const body = note

    return this.http.post(this.postUpdatedApiUrl,body, { headers });
  }
 }
