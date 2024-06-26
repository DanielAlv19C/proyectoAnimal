import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LecturaComponent } from './lectura/lectura.component';
import { LetraComponent } from './letra/letra.component';
import { SubrayadoComponent } from './subrayado/subrayado.component';


@Component({
  selector: 'app-lector-pantalla',
  standalone: true,
  imports: [FormsModule, LecturaComponent, LetraComponent, SubrayadoComponent],
  templateUrl: './lector-pantalla.component.html',
  styleUrl: './lector-pantalla.component.css'
})
export class LectorPantallaComponent {
  menuVisible: boolean = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
