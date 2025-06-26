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

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.task);
  }

  @Input({ required: true }) task!: Task;
  @Output() taskIdToDelete = new EventEmitter<string>();
  onComplete() {
    this.taskIdToDelete.emit(this.task.id);
  }
}
