import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users=DUMMY_USERS;
  selectedUserId!:string;

  onSelect(event:string){
    this.selectedUserId=event;
  }
}
