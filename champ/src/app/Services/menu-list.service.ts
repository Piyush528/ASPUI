import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Menus } from '../Models/Menu.Model';
import { Items } from '../Models/Item.Model';

@Injectable({
  providedIn: 'root'
})

export class MenuListService {
  baseapiurl: string = environment.baseapiurl

  constructor(
    private http:HttpClient
  ) { }
  getmenu():Observable<Menus[]>{
    return this.http.get<Menus[]>(this.baseapiurl+"/api/Menu")


  }
  getitem(id:number):Observable<Items[]>{
    return this.http.get<Items[]>(this.baseapiurl+"/Items/" +id)


  }


}
