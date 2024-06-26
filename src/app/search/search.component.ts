import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/cliente.model';
import { BusquedaService } from '../busqueda.service';
import { combineLatest } from 'rxjs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatCardModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit {
trackCita(_t3: number,_t2: Cliente) {
throw new Error('Method not implemented.');
}
  citas: Cliente[] = [];

  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService,
    private busquedaService: BusquedaService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    combineLatest([this.route.queryParams, this.busquedaService.nombreActual]).subscribe(([params, nombreBusqueda]) => {
      const nombre = params['nombre'] || nombreBusqueda;
      this.citas = this.clientesService.getCitasPorNombre(nombre);

      if (this.citas.length === 0) {
        this.snackBar.open('No se encontraron resultados para la búsqueda', 'Cerrar', {
          duration: 2000,  // Duración en milisegundos después de la cual el snackbar se cerrará automáticamente
        });
      }1  
    });
  }
}