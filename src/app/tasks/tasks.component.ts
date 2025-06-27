import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './task.constant';
import { DUMMY_USERS } from '../dummy-users';
import { NewTaskData, Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { v4 } from 'uuid';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  isAddTaskNeeded: boolean = false;
  ngOnInit(): void {
    this.availableTask = dummyTasks;
  }
  @Input({ required: true }) userId!: string;
  get getUserName() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }
  availableTask: Task[] = [];
  get taskList() {
    return this.availableTask.filter((task) => task.userId === this.userId);
  }

  activateAddTaskComponent() {
    this.isAddTaskNeeded = true;
  }

  deleteTask(id: string) {
    this.availableTask = this.availableTask.filter((task) => task.id !== id);
  }
  onCancelAddTask() {
    this.isAddTaskNeeded = false;
  }
  addNewTask(taskData: NewTaskData) {
    this.availableTask.unshift({
      userId: this.userId,
      id: v4(),
      dueDate: taskData.date,
      summary: taskData.summary,
      title: taskData.title,
    });
    this.isAddTaskNeeded=false;
  }
}
