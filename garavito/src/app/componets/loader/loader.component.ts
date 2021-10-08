import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { event } from 'jquery';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationStart){
        this.show=true;
      }else if(event instanceof NavigationEnd){
        this.show=false;
      }
    });
  }
  show=false;
}
