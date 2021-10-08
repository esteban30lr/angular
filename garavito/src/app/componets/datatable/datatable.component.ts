import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MunicipiosService } from "../../services/municipio.service";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnDestroy, OnInit {

  data;

  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject();

  constructor(public json: MunicipiosService) { }

  ngOnInit(): void {
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
    this.json.obtenerMunicipios('https://www.php.engenius.com.co/DatabaseIE.php').subscribe((res: any)=>{
      console.log(res);
      this.data = res;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
