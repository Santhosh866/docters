import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-successmessage',
  templateUrl: './successmessage.component.html',
  styleUrl: './successmessage.component.scss'
})
export class SuccessmessageComponent {
  @Input() message: string = '';
}
