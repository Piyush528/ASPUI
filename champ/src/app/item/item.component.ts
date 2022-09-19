import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Items } from '../Models/Item.Model';
import { MenuListService } from '../Services/menu-list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item:Items[]=[];

  constructor(private itemservice:MenuListService,
    private myroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.myroute.params.subscribe((params: Params) => {
      let id = +params['id'];
      this.itemservice.getitem(id).subscribe(data => {
        this.item = data;
        console.log(this.item);
       
  })
})
}
}


