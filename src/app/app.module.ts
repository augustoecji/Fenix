import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios

//Rutas
import {APP_ROUTING} from './app.routes';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactoComponent,
    HomeComponent,
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
