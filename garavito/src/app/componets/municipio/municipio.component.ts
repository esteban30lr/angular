import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MunicipiosService } from "../../services/municipio.service";
 
@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject();

  data;
  title:'municipio-http';

  constructor(public json: MunicipiosService) { 

  }
 
  ngOnInit() {
    this.json.obtenerMunicipios('https://www.php.engenius.com.co/DatabaseIE.php').subscribe((res: any)=>{
      console.log(res);
      this.data = res;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

}