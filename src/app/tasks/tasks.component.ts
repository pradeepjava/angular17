import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './task.constant';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit{
  ngOnInit(): void {
   this.availableTask = dummyTasks;
  }
  @Input({ required: true }) userId?: string;
  get getUserName() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }
  availableTask:Task[]=[];
  get taskList() {

    return this.availableTask.filter(
      (task) => task.userId === this.userId
    );
    
  }
  deleteTask(id: string) {
    this.availableTask = this.availableTask.filter((task) => task.id !== id);
  }
}
