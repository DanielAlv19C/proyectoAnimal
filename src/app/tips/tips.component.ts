import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})

export class TipsComponent implements OnInit {
  displayedColumns = ['position', 'name', 'desc'];
  dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    const url = 'https://tipsrap.free.beeceptor.com/';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.dataSource = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
