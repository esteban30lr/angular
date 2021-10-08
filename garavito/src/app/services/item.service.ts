import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from "../models/item";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='https://www.php.engenius.com.co/DatabaseIE.php';
  items:Item[]=[
    {
      id:0,
      title:'manzana',
      precio:4.2,
      cantidad:2,
      completado : false
    },
    {
      id:1,
      title:'pan',
      precio:4.2,
      cantidad:8,
      completado : true
    },
    {
      id:2,
      title:'chaqueta',
      precio:300.2,
      cantidad:1,
      completado : true
    }

  ];
  constructor(private http:HttpClient) { }

  getItems(){
      return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
