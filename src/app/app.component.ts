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
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

}
