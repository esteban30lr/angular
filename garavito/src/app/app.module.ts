import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { ItemsComponent } from './componets/items/items.component';
import { ItemComponent } from './componets/item/item.component';
import {TotalComponent} from './componets/total/total.component';
import { FormsModule } from '@angular/forms';
import { PruebacComponent } from './componets/pruebac/pruebac.component';

import { HttpClientModule} from "@angular/common/http";
import { MunicipioComponent } from './componets/municipio/municipio.component';
import { InstitucionesComponent } from './componets/instituciones/instituciones.component';
import { SedesComponent } from './componets/sedes/sedes.component';
import { GruposComponent } from './componets/grupos/grupos.component';
import { InformacionComponent } from './componets/informacion/informacion.component';
import { DatatableComponent } from './componets/datatable/datatable.component';
import { LoaderComponent } from './componets/loader/loader.component';
import { IndexComponent } from './componets/index/index.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent,
    PruebacComponent,
    MunicipioComponent,
    InstitucionesComponent,
    SedesComponent,
    GruposComponent,
    InformacionComponent,
    DatatableComponent,
    LoaderComponent,
    IndexComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
