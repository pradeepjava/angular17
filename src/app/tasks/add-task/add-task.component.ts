import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() newTaskData = new EventEmitter<NewTaskData>();
  onSubmit() {
    this.newTaskData.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = signal('');
  enteredSummary = '';
  enteredDate = '';
  onCancelEmit() {
    this.cancel.emit();
  }
}
