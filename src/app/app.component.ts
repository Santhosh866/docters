import { Component, OnInit } from '@angular/core';
import { SuccessService } from './service/success.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  successMessage: string = ''; // Define successMessage property

  constructor(private successService: SuccessService) {}

  ngOnInit() {
    this.successService.successMessage$.subscribe(message => {
      this.successMessage = message;
      if (message) {
        setTimeout(() => {
          this.successMessage = '';
        }, 3000); // Hide message after 3 seconds
      }
    });
  }
}
