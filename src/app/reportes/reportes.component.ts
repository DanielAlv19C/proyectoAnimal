import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  pastAppointments: any[] = [];
  upcomingAppointments: any[] = [];

  constructor(public miservicio: AnimalService) {}

  ngOnInit(): void {
    this.generatePastAppointmentsReport();
    this.generateUpcomingAppointmentsReport();
  }

  generatePastAppointmentsReport(): any[] {
    const currentDate = new Date();
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    const pastAppointments = storedData.filter((appointment: any) => new Date(appointment.fecha) < currentDate);
    this.pastAppointments = pastAppointments;
  }
  
  generateUpcomingAppointmentsReport(): any[] {
    const currentDate = new Date();
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    const upcomingAppointments = storedData.filter((appointment: any) => new Date(appointment.fecha) >= currentDate);
    this.upcomingAppointments = upcomingAppointments;
  }
}