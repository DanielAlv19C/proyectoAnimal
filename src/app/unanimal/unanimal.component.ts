import { Component } from '@angular/core';
import { AnimalService } from '../shared/animal.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Animal } from '../animal';
import { AltaClienteComponent } from '../clientes/alta-cliente/alta-cliente.component';

@Component({
  selector: 'app-unanimal',
  standalone: true,
  imports: [RouterModule, AltaClienteComponent],
  templateUrl: './unanimal.component.html',
  styleUrl: './unanimal.component.css'
})
export class UnanimalComponent {

  animal!: Animal;

  constructor(public animalService: AnimalService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.animal = animalService.getUnAnimal(params['id']);
    });
  }
}
