import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
 private apiUrl = '/api/v1/ui-connect/notelist';
  constructor(private http: HttpClient) {}

  getData(accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`    });

    return this.http.get(this.apiUrl, { headers });
  }
}
