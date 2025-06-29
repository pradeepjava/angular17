import { Component, Input, OnInit } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { NewTaskData } from './task/task.model';

import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone:false
})
export class TasksComponent {
  private taskService;
  constructor(taskService: TaskService) {
    this.taskService=taskService;
  }
  isAddTaskNeeded: boolean = false;

  @Input({ required: true }) userId!: string;
  get getUserName() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }

  get taskList() {
    return this.taskService.getTask(this.userId);
  }

  activateAddTaskComponent() {
    this.isAddTaskNeeded = true;
  }
  onCancelAddTask() {
    this.isAddTaskNeeded = false;
  }
  addNewTask(taskData: NewTaskData) {
    this.taskService.addTask(taskData, this.userId);
    this.isAddTaskNeeded = false;
  }
}
