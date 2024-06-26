import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Chart, ChartType } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CitasService } from '../services/citas.service';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styles: [`
    .estadisticas-container {
      width: 90%;
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
    }
    .estadisticas-title {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: bold;
    }
    .chart-container {
      position: relative;
      height: 60vh;
      width: 100%;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1rem;
    }
  `]
})
export class EstadisticasComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  citas$: Observable<any[]>;

  constructor(private citasService: CitasService) {
    this.citas$ = this.citasService.getCitas();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.citas$.subscribe(citas => {
      const tipoAnimalData = this.calcularPorcentajeTipos(citas);
      this.generarGrafico(tipoAnimalData);
    });
  }

  calcularPorcentajeTipos(citas: any[]): { [key: string]: number } {
    const tipos = citas.map(cita => cita.animal.tipo);
    const conteo = tipos.reduce((acc: { [key: string]: number }, tipo) => {
      acc[tipo] = (acc[tipo] || 0) + 1;
      return acc;
    }, {});

    const total = tipos.length;
    const porcentajes: { [key: string]: number } = {};
    for (const tipo in conteo) {
      porcentajes[tipo] = (conteo[tipo] / total) * 100;
    }

    return porcentajes;
  }

  generarGrafico(data: { [key: string]: number }) {
    if (this.myChart) {
      const ctx = this.myChart.nativeElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'pie' as ChartType,
          data: {
            labels: Object.keys(data),
            datasets: [{
              data: Object.values(data),
              backgroundColor: ['#FF9AA2', '#4EA8DE'],
              borderColor: '#ffffff',
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: {
                top: 20,
                bottom: 20,
                left: 20,
                right: 20
              }
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: {
                    size: 14
                  },
                  padding: 20
                }
              },
              datalabels: {
                color: '#000000',
                font: {
                  weight: 'bold',
                  size: 14
                },
                formatter: (value, ctx) => {
                  const label = ctx.chart.data.labels?.[ctx.dataIndex];
                  return `${label}: ${value.toFixed(1)}%`;
                },
                anchor: 'end',
                align: 'end',
                offset: 10,
                textAlign: 'center'
              }
            }
          }
        });
      } else {
        console.error('No pudo obtener contexto para las canvas');
      }
    } else {
      console.error('Canvas no encontrado');
    }
  }
}