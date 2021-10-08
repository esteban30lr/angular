import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { promise } from "selenium-webdriver";

const httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

@Injectable({
    providedIn: 'root'
})
export class MunicipiosService{

    constructor(private http : HttpClient){} 
    
    
    obtenerMunicipios(url: string) {
        let dataPeticion = {
            User: 'etraining',
            Password: 'explorandoando2020%',
            option: 'municipios'
          };
        return this.http.post(url,dataPeticion,{ headers: httpHeaders })
      }

    obtenerInstituciones(url:string, dane:number){
        let dataPeticion = {
            User: 'etraining',
            Password: 'explorandoando2020%',
            option: 'instituciones',
            CodMun: dane
        };
        return this.http.post(url,dataPeticion,{headers: httpHeaders})
    }

    obtenerSedes(url:string, dane:number){
        let dataPeticion = {
            User: 'etraining',
            Password: 'explorandoando2020%',
            option: 'sedes',
            CodInst: dane
        };
        return this.http.post(url,dataPeticion,{headers: httpHeaders})
    }

    obtenerGrupo(url:string, dane:number){
        let dataPeticion = {
            User: 'etraining',
            Password: 'explorandoando2020%',
            option: 'grupos',
            CodSede: dane
        };
        return this.http.post(url,dataPeticion,{headers: httpHeaders})
    }

    obtenerInfo(url:string, dane:number){
        let dataPeticion = {
            User: 'etraining',
            Password: 'explorandoando2020%',
            option: 'infoGrupo',
            IdGrupo: dane
        };
        return this.http.post(url,dataPeticion,{headers: httpHeaders})
    }
}