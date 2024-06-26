import { Component } from '@angular/core';
import { DomseguroPipe } from './domseguro.pipe';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [DomseguroPipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  video:string="4ee5wTZbF6k?si=1qT221snR0tKIn24";

}
