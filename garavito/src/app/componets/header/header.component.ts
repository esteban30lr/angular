import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  sidebar
  constructor() { }

  ngOnInit(): void {
  }

  Cambiar(){
    this.sidebar = document.querySelector(".sidebar");
    this.sidebar.classList.toggle("active");
    console.log("click")
  }

}
