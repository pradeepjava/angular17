import {
  Component,
  EventEmitter,
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

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
  @Output() taskIdToDelete = new EventEmitter<string>();
  onComplete() {
    this.taskIdToDelete.emit(this.task.id);
  }

}
