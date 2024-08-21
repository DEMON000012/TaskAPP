import { Component, Input } from '@angular/core';
import { Task } from './atask.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-atask',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './atask.component.html',
  styleUrl: './atask.component.css',
})
export class AtaskComponent {
  @Input() task!: Task;
  constructor(private taskService: TaskService) {}

  onCompleteTask() {
    this.taskService.ondeleteTask(this.task.id);
  }
}
