import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {
  qrData: string = '';
  qrCodeUrl: string = '';

  constructor(private http: HttpClient) {}

  generateQRCode() {
    this.http.get<{ qrData: any }>('http://localhost:3000/get-data')
      .subscribe({
        next: (response) => {
          this.qrData = JSON.stringify(response.qrData, null, 2);
          QRCode.toDataURL(this.qrData, (err, url) => {
            if (err) {
              console.error('Error generating QR code', err);
            } else {
              this.qrCodeUrl = url;
            }
          });
        },
        error: (error) => {
          console.error('Error al obtener los datos', error);
        }
      });
  }

}