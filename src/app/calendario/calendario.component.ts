import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [FormsModule, CalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',
})

export class CalendarioComponent {
  date: Date | undefined;
  minDate: Date;
  @Output() dateChange = new EventEmitter<Date | undefined>();

  constructor() {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }

  onDateChange(date: Date | undefined) {
    this.date = date;
    this.dateChange.emit(this.date);
  }

}
