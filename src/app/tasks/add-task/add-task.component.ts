import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
  standalone:false
})
export class AddTaskComponent {
   taskService = inject(TaskService);
  @Input({ required: true }) userId!: string;
 
  onSubmit() {
    let taskData = {
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      date: this.enteredDate,
    };
    this.taskService.addTask(taskData, this.userId);
    this.onClose();
  }
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = signal('');
  enteredSummary = '';
  enteredDate = '';
  onClose() {
    this.cancel.emit();
  }
}
