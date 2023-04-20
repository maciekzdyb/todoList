import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config: { [key: string]: string | Date };

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
  

}
