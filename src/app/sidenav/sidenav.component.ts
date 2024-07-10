import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  constructor(private authService : AuthService, private router: Router) {
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
