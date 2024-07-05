import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteViewService {
  private apiUrl = '/api/v1/ui-connect/note-review?audio_id=';
  private postApiUrl = '/api/v1/ui-connect/note-review';
   constructor(private http: HttpClient) {}
 
   getData(accessToken: string,id:string): Observable<any> {
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${accessToken}`    });
 
     return this.http.get(this.apiUrl+id, { headers });
   }
   postData(accessToken: string,audioId: string, noteData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`    });
      const body = {
        audio_id: audioId,
        note: noteData
      };

    return this.http.post(this.postApiUrl,body, { headers });
  }
 }
