import { Component, OnInit } from '@angular/core';
import { PhpService } from 'src/app/services/php.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  title ="formulario";
  art = {
    id:null,
    usuario:null
  }
  constructor(private php: PhpService) { }

  Agregar(){
    this.php.insertarData(this.art).subscribe(datos =>{
      if(datos['resultado'] == 'ok'){
        alert(datos['mensaje']);
      }
      else{
        alert('algo salio mal');
      }
      console.log(datos);
    })
  }

  ngOnInit(): void {
  }

}
