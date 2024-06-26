import { Component } from '@angular/core';

@Component({
  selector: 'app-letra',
  standalone: true,
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.css']
})
export class LetraComponent {
  defaultSize: number = 15;
  fontSize: number;

  constructor() {
    this.fontSize = this.defaultSize;
    this.updateFontSize();
  }

  decrease() {
    this.fontSize = this.fontSize * 0.8;
    this.updateFontSize();
  }

  increase() {
    this.fontSize = this.fontSize * 1.2;
    this.updateFontSize();
  }

  reset() {
    this.fontSize = this.defaultSize;
    this.updateFontSize();
  }

  private updateFontSize() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.fontSize = `${this.fontSize}px`;
      }
    });
  }
}


