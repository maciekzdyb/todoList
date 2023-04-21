import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie: odkurzanie';
  taskDate='';
  config: { [key: string]: string | Date };
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2023-04-21',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2023-04-22',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2023-04-23',
      done: false,
    },
  ];

  constructor(){
   
    this.config = {};
    setTimeout( () =>{
      this.config = {
        title: 'Lista zadań',
        footer: ' © Lista zadań,All rights reserved.',
        date: new Date()
      }
    },500);
    this.sortTasks();    
  }

  clearTasks(){
    this.tasks = [];
  }
  


  createTask(){
    const task: Task = {
      name: this.taskName,               
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }
  
  markTaskAsDone(task: Task){
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(t => t !== task);
    this.sortTasks();
  }

  private sortTasks(){
    this.tasks = this.tasks.sort((a: Task, b: Task) => a.done === b.done ? 0 : a.done ? 1 : -1);
  }
}
