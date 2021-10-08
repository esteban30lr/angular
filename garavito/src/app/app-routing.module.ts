import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './componets/items/items.component';
import { PruebacComponent } from './componets/pruebac/pruebac.component';
import { MunicipioComponent } from "./componets/municipio/municipio.component";
import { InstitucionesComponent } from './componets/instituciones/instituciones.component';
import { SedesComponent } from './componets/sedes/sedes.component';
import { GruposComponent } from './componets/grupos/grupos.component';
import { InformacionComponent } from './componets/informacion/informacion.component';
import {DatatableComponent} from './componets/datatable/datatable.component'
import { ItemComponent } from './componets/item/item.component';
import { IndexComponent } from './componets/index/index.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {
    path:'d',
    component: MunicipioComponent
  },
  {
    path:'add',
    component: PruebacComponent
  },
  {
    path:'main',
    component: DatatableComponent
  },
  {
    path: 'instituciones/:municipio',
    component: InstitucionesComponent
  },
  {
    path: 'sedes/:instituciones',
    component: SedesComponent
  },
  {
    path: 'grupos/:sedes',
    component: GruposComponent
  },
  {
    path: 'info/:grupos',
    component: InformacionComponent
  },
  {
    path:'items',
    component: ItemComponent
  },
  {
    path:'index',
    component: IndexComponent
  },
  {
    path: '',
    component: FormularioComponent
  },
  {
    path:'formulario',
    component: ListaComponent
  }
]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
