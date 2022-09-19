import { Component, OnInit } from '@angular/core';
import { Dispalays } from '../Models/Display.Model';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displays:Dispalays={
    name:"" ,
    quantity:0
    
  }

  constructor() {
    
   }


  ngOnInit(): void {

  }
  sub(){
    
  }

}
