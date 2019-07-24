import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { ProductosComponent } from './secciones/productos/productos.component';
import { EsclusasComponent } from "./secciones/esclusas/esclusas.component";
import { ServicioComponent } from './secciones/servicio/servicio.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

import { ConfigService } from "./secciones/contacto/contacto.service";
import { GaleriaComponent } from './secciones/galeria/galeria.component';
import { GaleriaItemComponent } from './secciones/galeria-item/galeria-item.component';

// Servicios
import { HttpModule } from "@angular/http";
import { ProductosService } from './services/productos.service';
import { EsclusasService } from "./services/esclusas.service";
import { AltaService } from './services/alta.service';

import { ProductosItemComponent } from './secciones/productos-item/productos-item.component';
import { EsclusasItemComponent } from './secciones/esclusas-item/esclusas-item.component';
import { AltaComponent } from './secciones/alta/alta.component';
import { AltaItemComponent } from './secciones/alta-item/alta-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    NosotrosComponent,
    ProductosComponent,
    EsclusasComponent, 
    EsclusasItemComponent, 
    ServicioComponent,
    ContactoComponent,
    GaleriaComponent,
    GaleriaItemComponent,
    ProductosItemComponent,
    EsclusasComponent,
    EsclusasItemComponent,
    AltaComponent,
    AltaItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
  ],
  providers: [ConfigService, ProductosService, EsclusasService, AltaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
