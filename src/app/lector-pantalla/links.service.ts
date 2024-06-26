// src/app/links.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private isHighlighted = false;

  constructor() {}

  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      if (this.isHighlighted) {
        link.style.color = '#000';
        link.style.backgroundImage = 'linear-gradient(to right, yellow, yellow)';
      } else {
        link.style.color = '';
        link.style.backgroundImage = '';
        link.style.backgroundSize = '';
        link.style.backgroundRepeat = '';
        link.style.backgroundPosition = '';
        link.style.paddingBottom = '';
      }
    });
  }
}
