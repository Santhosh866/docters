import { AfterViewInit, Component,OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CommonService } from '../service/common.service';
import { SuccessService } from '../service/success.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  _id:string;
  caseid: string;
  name: string;
  date: string;
  status: string;
  verified:boolean
}
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'status','verified'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  successMessage: string = '';
  data: any;
  constructor(private apiService: CommonService,private authService : AuthService, private router: Router,private successService: SuccessService) {
  }
  ngOnInit() {
    console.log("datasourse",this.dataSource)
    const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken) {
      const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      this.successService.showSuccess('Logged in Successfully');
      localStorage.setItem('hasVisited', 'true');
    }
      this.apiService.getData(accessToken).subscribe(
        response => {
          const users: UserData[] = response?.result;
          this.dataSource = new MatTableDataSource(users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log("NoteList API Response",response?.result);
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
    } else {
      console.error('Access token is null or undefined');
    }
    // Other initialization logic if any
  }
  ngAfterViewInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getStatusColor(status: string): string {
    switch (status) {
      case 'Completed':
        return '#D8F7E8'; // or any color
      case 'In Progress':
        return '#F7F5C6'; // or any color
      default:
        return '#F7E1E1'; // default color
    }
  }
  getVerifiedColor(row: any): string {
    return row.verified ? '#47D186' : 'accent';
  }
  onClick(row:UserData) {
    const accessToken : string | null = localStorage.getItem('access_token');
    if (accessToken && row.verified === true) {
    this.apiService.postData(accessToken,row._id)
      .subscribe(
        (response) => {
          row.verified=false
          this.successService.showSuccess('Note-review Doc Updated');
          console.log('Note created successfully:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error creating note:', error);
          // Handle error
        }
      );
    }
  }
   }

