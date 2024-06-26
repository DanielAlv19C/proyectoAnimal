import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  mostrarOpcionesLogin = false;

  constructor(private router: Router) { }

  redirectToCreateUser() {
    this.router.navigate(['/create-user']);
  }

  redirectToLoginEmail() {
    this.router.navigate(['/login-email']);
  }

  redirectToLoginPhone() {
    this.router.navigate(['/login-phone']);
  }

  mostrarOpciones() {
    this.mostrarOpcionesLogin = !this.mostrarOpcionesLogin;
  }
}