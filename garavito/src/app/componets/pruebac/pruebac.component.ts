import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-pruebac',
  templateUrl: './pruebac.component.html',
  styleUrls: ['./pruebac.component.css']
})
export class PruebacComponent implements OnInit {
  id:number=0;
  title:string='';
  precio:number=0;
  cantidad:number=0;
  constructor(private itemService:ItemService, private router:Router) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.id= this.id;
    item.title=this.title;
    item.precio=this.precio;
    item.cantidad=this.cantidad;
    item.completado=false;

    this.itemService.addItem(item);
    this.router.navigate(['/']);
  
  }

}
