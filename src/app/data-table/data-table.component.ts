import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  data: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, address: '123 Main St', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, address: '456 Elm St', phone: '555-5678' },
    { id: 3, name: 'Sam Brown', email: 'sam@example.com', age: 22, address: '789 Oak St', phone: '555-8765' },
    { id: 4, name: 'Alice Johnson', email: 'alice@example.com', age: 29, address: '135 Maple St', phone: '555-2468' },
    { id: 5, name: 'Mike Wilson', email: 'mike@example.com', age: 35, address: '246 Pine St', phone: '555-1357' },
    { id: 6, name: 'Sara White', email: 'sara@example.com', age: 31, address: '12 Birch St', phone: '555-7894' },
    { id: 7, name: 'Chris Green', email: 'chris@example.com', age: 26, address: '34 Cedar St', phone: '555-4321' },
    { id: 8, name: 'Patricia Adams', email: 'patricia@example.com', age: 24, address: '56 Spruce St', phone: '555-9876' },
    { id: 9, name: 'Daniel Clark', email: 'daniel@example.com', age: 30, address: '78 Chestnut St', phone: '555-5432' },
    { id: 10, name: 'Laura Lewis', email: 'laura@example.com', age: 27, address: '90 Aspen St', phone: '555-6789' },
    { id: 11, name: 'Ryan King', email: 'ryan@example.com', age: 23, address: '21 Oak St', phone: '555-3214' },
    { id: 12, name: 'Olivia Hill', email: 'olivia@example.com', age: 34, address: '43 Maple St', phone: '555-5647' },
    { id: 13, name: 'Mason Wright', email: 'mason@example.com', age: 25, address: '65 Pine St', phone: '555-7765' },
    { id: 14, name: 'Emma Harris', email: 'emma@example.com', age: 28, address: '87 Elm St', phone: '555-1243' },
    { id: 15, name: 'Ethan Martinez', email: 'ethan@example.com', age: 32, address: '109 Cedar St', phone: '555-6543' },
    { id: 16, name: 'Sophia Scott', email: 'sophia@example.com', age: 29, address: '111 Birch St', phone: '555-1345' },
    { id: 17, name: 'James Lopez', email: 'james@example.com', age: 30, address: '121 Spruce St', phone: '555-7654' },
    { id: 18, name: 'Isabella Perez', email: 'isabella@example.com', age: 26, address: '141 Chestnut St', phone: '555-3213' },
    { id: 19, name: 'William Lee', email: 'william@example.com', age: 27, address: '161 Aspen St', phone: '555-7651' },
    { id: 20, name: 'Mia Brown', email: 'mia@example.com', age: 31, address: '181 Oak St', phone: '555-9871' }
  ];
}
