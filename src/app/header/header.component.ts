import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AcercaComponent } from '../acerca/acerca.component';
import { DonadoresComponent } from '../donadores/donadores.component';
import { TipsComponent } from '../tips/tips.component';
import {MatIconModule} from '@angular/material/icon';
import { AnimalesComponent } from '../animales/animales.component';
import { BusquedaService } from '../busqueda.service';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { EstadisticasComponent } from '../estadisticas/estadisticas.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, HomeComponent, EstadisticasComponent , AcercaComponent, DonadoresComponent, TipsComponent, RouterModule, MatIconModule, AnimalesComponent, CommonModule, ContactoComponent, FaqComponent],
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router, private busquedaService: BusquedaService) { }

  nombreBusqueda(nombre: string) {
    this.busquedaService.cambiarNombre(nombre);
    this.router.navigate(['/buscador', nombre]);
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  colorBase = '#18708c';

  
}
