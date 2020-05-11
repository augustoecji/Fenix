import { RouterModule, Routes } from '@angular/router';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {PortafolioComponent} from './components/portafolio/portafolio.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {HomeComponent} from './components/home/home.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
