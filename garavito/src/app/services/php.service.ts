import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpService {

  url = "http://localhost/angularPHP/"; //url ubicacion archivos de conexion, preferiblemente mover a ubicacion dentro del proyecto

  constructor(private http: HttpClient){}

  mostrarDatos(){
    console.log('metodo ok')
    console.log(this.http.get(`${this.url}mostrarData.php`),{responseType:'text'});
      return this.http.get(`${this.url}mostrarData.php`);
  }

  insertarData(persona){
      return this.http.post(`${this.url}ingresarData.php`, JSON.stringify(persona));
  }

}
