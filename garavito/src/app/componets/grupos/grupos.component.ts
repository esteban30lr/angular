import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { MunicipiosService } from 'src/app/services/municipio.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnDestroy, OnInit { 
  dane;
  data;

  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject();

  constructor(public json:MunicipiosService, public rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.dane = this.rutaActiva.snapshot.params.sedes
    this.obtenerDatos()
  }

  obtenerDatos(){
    this.dtOptions ={
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    }
    this.json.obtenerGrupo('https://www.php.engenius.com.co/DatabaseIE.php',this.dane).subscribe((res: any)=>{
      console.log(res);
      this.data = res;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

}
