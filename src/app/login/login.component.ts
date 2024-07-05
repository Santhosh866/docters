// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string='';

  constructor(private authService: AuthService,private router: Router) { 
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.login(this.form.value.username, this.form.value.password).subscribe({
        next: response => {
          console.log('Login successful:', response);
          this.router.navigate(['/data']);
        },
        error: err => {
          console.error('Login error:', err);
          if (err.status === 401 || 404) {
            // Handle unauthorized errors (e.g., incorrect credentials)
            this.errorMessage = 'Invalid username or password. Please try again.';
          } else {
            // Handle other types of errors
            this.errorMessage = 'An error occurred. Please try again later.';
          }
        }
      });
    }
  }
}