import { Component, OnInit } from '@angular/core';
import { Menus } from '../Models/Menu.Model';
import { MenuListService } from '../Services/menu-list.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  menus:Menus[]=[]

  constructor(
    private menuservice:MenuListService
  ) { }

  ngOnInit(): void {
    this.menuservice.getmenu().subscribe(dataresponse=>{
      this.menus = dataresponse

    })
  }

}
