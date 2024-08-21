import { Injectable } from '@angular/core';
import { NewTaskData } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  constructor() {
    const task = localStorage.getItem('tasks');
    if (task) {
      this.tasks = JSON.parse(task);
    }
  }
  getusertask(user_uid: string) {
    return this.tasks.filter((task) => task.userId === user_uid);
  }
  onaddTask(taskData: NewTaskData, user_uid: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: user_uid,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveData();
  }
  ondeleteTask(user_uid: string) {
    this.tasks = this.tasks.filter((task) => task.id !== user_uid);
    this.saveData();
  }
  private saveData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
