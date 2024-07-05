import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {
  private successMessageSubject = new Subject<string>();
  successMessage$ = this.successMessageSubject.asObservable();

  constructor() { }

  showSuccess(message: string) {
    this.successMessageSubject.next(message);
  }

  clear() {
    this.successMessageSubject.next('');
  }
}
