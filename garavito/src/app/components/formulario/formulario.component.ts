import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhpService } from 'src/app/services/php.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, OnDestroy{
  title = "LISTA DE PERSONAS INGRESADAS EN LA BASE DE DATOS";

  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject();

  personas = null;

  art = {
    id:null,
    usuario:null
  }

  constructor(private php: PhpService){}

    ngOnInit(){
      this.Mostrar();
    }

    Mostrar(){
      this.dtOptions ={
        pagingType: 'full_numbers',
        pageLength: 5,
        language: {
          url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
        }
      }

      this.php.mostrarDatos().subscribe((res:any)=>{
        console.log(res);
        this.personas = res;
        this.dtTrigger.next();
      });
    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }

}
