
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  segments: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
  segmentAngle: number = 360 / this.segments.length;
  wheelTransform: string = '';

  spinWheel() {
    const randomDegree = Math.floor(Math.random() * 360) + 3600; // Spin multiple times around
    this.wheelTransform = `rotate(${randomDegree}deg)`;
  }
}









