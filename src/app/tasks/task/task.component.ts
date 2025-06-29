import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { type Task } from './task.model';
import { OutletContext } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone:false
})
export class TaskComponent {
taskService=inject(TaskService);
  @Input({ required: true }) task!: Task;
  onComplete() {
    this.taskService.deleteTask(this.task.id);
  }

}
