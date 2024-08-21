import { Component, Input, output } from '@angular/core';
import { AtaskComponent } from '../atask/atask.component';
import { NewtaskComponent } from '../newtask/newtask.component';
import { NewTaskData } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [AtaskComponent, NewtaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) id!: string;
  @Input() name?: string;
  isAddingTask = false;
  constructor(private taskService: TaskService) {}

  get setUsersTasks() {
    return this.taskService.getusertask(this.id);
  }

  addingTask() {
    this.isAddingTask = true;
  }
  closingTask() {
    this.isAddingTask = false;
  }
}
