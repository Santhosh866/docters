import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
 private apiUrl = '/api/v1/ui-connect/notelist';
 private postApiUrl = '/api/v1/ui-connect/provider-verified';

  constructor(private http: HttpClient) {}

  getData(accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`    });

    return this.http.get(this.apiUrl, { headers });
  }
  postData(accessToken: string,audioId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`    });
      const body = {
        audio_id: audioId,
        status: 'false'
      };

    return this.http.post(this.postApiUrl,body, { headers });
  }
}
