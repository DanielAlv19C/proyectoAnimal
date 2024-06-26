import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FechaPipe } from './fecha.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FechaPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  today: Date = new Date();
}
