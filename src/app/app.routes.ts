import { Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { DonadoresComponent } from './donadores/donadores.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TipsComponent } from './tips/tips.component';
import { AnimalesComponent } from './animales/animales.component';
import { UnanimalComponent } from './unanimal/unanimal.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginEmailComponent } from './login-email/login-email.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import { RegisterComponent } from './register/register.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FaqComponent } from './faq/faq.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'animales', component: AnimalesComponent},
    {path: 'acerca', component: AcercaComponent},
    {path: 'tips', component: TipsComponent},
    {path: 'donadores', component: DonadoresComponent},
    {path: 'buscador/:nombre', component: SearchComponent},
    {path: 'animal/:id', component: UnanimalComponent},
    { path: 'create-user', component: CreateUserComponent },
    { path: 'login-email', component: LoginEmailComponent },
    { path: 'login-phone', component: LoginPhoneComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'contacto', component: ContactoComponent},
    { path: 'faq', component: FaqComponent},

]
