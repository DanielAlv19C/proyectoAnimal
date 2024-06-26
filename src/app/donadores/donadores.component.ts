import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var Masonry: any; // Declarar Masonry para evitar errores de TypeScript

@Component({
  selector: 'app-donadores',
  templateUrl: './donadores.component.html',
  styleUrls: ['./donadores.component.css'],
  standalone: true,
})
export class DonadoresComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    // Inicializar Masonry después de que el DOM esté cargado
    const grid = this.elementRef.nativeElement.querySelector('.grid');
    const masonry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: 20, // Espacio entre los elementos
      // Responsividad: ajuste el número de columnas según el tamaño de la ventana
      responsive: {
        1200: 5,
        992: 4,
        768: 3,
        576: 2,
        0: 1
      }
    });
  }
}
