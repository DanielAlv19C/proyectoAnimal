import { Component } from '@angular/core';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-subrayado',
  standalone: true,
  imports: [],
  templateUrl: './subrayado.component.html',
  styleUrl: './subrayado.component.css'
})
export class SubrayadoComponent {
  constructor(private linksService: LinksService) { }

  toggleHighlight(): void {
    this.linksService.toggleHighlight();
  }
}
