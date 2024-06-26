export interface HeaderRoutes {
}

import { Routes } from '@angular/router';
import { AcercaComponent } from '../acerca/acerca.component';
import { DonadoresComponent } from '../donadores/donadores.component';
import { HomeComponent } from '../home/home.component';
import { TipsComponent } from '../tips/tips.component';
import { EstadisticasComponent } from '../estadisticas/estadisticas.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FaqComponent } from '../faq/faq.component';

export const routes: Routes = [
    
    {path: 'home', component: HomeComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'tips', component: TipsComponent},
    {path: 'donadores', component: DonadoresComponent},
    {path: 'estadisticas', component: EstadisticasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'faq', component: FaqComponent},

];
