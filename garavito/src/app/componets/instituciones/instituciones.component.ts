import { Component, OnInit, OnDestroy } from '@angular/core';
import { MunicipiosService } from "../../services/municipio.service";
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.css']
})
export class InstitucionesComponent implements OnDestroy,OnInit {
  
  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject();

  dane;
  data;
  constructor(public json: MunicipiosService, public rutaActiva:ActivatedRoute) {
   }

  ngOnInit() {
    this.dane = this.rutaActiva.snapshot.params.municipio;
    this.obtenerDatos();
  }
   
  obtenerDatos(){
    this.dtOptions ={
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    }
    this.json.obtenerInstituciones('https://www.php.engenius.com.co/DatabaseIE.php',this.dane).subscribe((res: any)=>{
      console.log(res);
      this.data = res;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy():void{
    this.dtTrigger.unsubscribe();
  }
}
