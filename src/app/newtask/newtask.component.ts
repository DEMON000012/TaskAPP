import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css',
})
export class NewtaskComponent {
  @Input({ required: true }) uid!: string;
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  constructor(private taskService: TaskService) {}
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.taskService.onaddTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.uid
    );
    this.cancel.emit();
  }
}
