import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';
import { ServicioComponent } from './secciones/servicio/servicio.component';
import { ProductosComponent } from './secciones/productos/productos.component';
import { ProductosItemComponent } from './secciones/productos-item/productos-item.component';
import { EsclusasComponent } from './secciones/esclusas/esclusas.component';
import { EsclusasItemComponent } from './secciones/esclusas-item/esclusas-item.component';
import { AltaComponent } from './secciones/alta/alta.component';
import { AltaItemComponent } from './secciones/alta-item/alta-item.component';


const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'nosotros', component: NosotrosComponent }, 
  { path: 'productos', component: ProductosComponent }, 
  { path: 'esclusas', component: EsclusasComponent }, 
  { path: 'esclusas-item/:producto', component: EsclusasItemComponent }, 
  { path: 'servicio', component: ServicioComponent }, 
  { path: 'alta', component: AltaComponent }, 
  { path: 'alta-item/:producto', component: AltaItemComponent }, 
  { path: 'productos-item/:producto', component: ProductosItemComponent }, 
  { path: 'contacto', component: ContactoComponent }, 
  { path: '**', pathMatch: 'full', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
