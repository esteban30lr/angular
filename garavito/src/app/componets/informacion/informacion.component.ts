import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { MunicipiosService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnDestroy, OnInit {

dtOptions: DataTables.Settings = {};
dtTrigger= new Subject();

dane;
data;
  constructor(public json: MunicipiosService, public rutaActiva: ActivatedRoute) { }

  ngOnInit(){
    this.dane = this.rutaActiva.snapshot.params.grupos
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
    this.json.obtenerInfo('https://www.php.engenius.com.co/DatabaseIE.php',this.dane).subscribe((res: any)=>{
      console.log(res);
      this.data = res;
    });
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
}
