import { Component, ViewChild  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerService } from '../spinner.service';
import { HttpClient,HttpErrorResponse,HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})

export class CreateUserComponent {
  @ViewChild('userForm') userForm!: NgForm; 
  name: string = '';
  apellido: string = '';
  email: string = '';
  account: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPasswordMismatchAlert: boolean = false;
  showFirebaseErrorAlert: boolean = false;
  showSignUpSuccessAlert: boolean = false;
  loading$ = this.spinnerService.loading$;


  constructor(private authService: AuthService, private router: Router, private spinnerService: SpinnerService) { }

  signUp() {
    this.spinnerService.show();
    // Validación de coincidencia de contraseñas
    if (this.password !== this.confirmPassword) {
      this.showPasswordMismatchAlert = true;
      return; // Detener la ejecución si las contraseñas no coinciden
    }

    // Llamar al servicio de AuthService para registrar el usuario
    this.authService.signUp(this.email, this.password)
      .subscribe({
        next: () => {
          // Éxito al registrar usuario
          this.showSignUpSuccessAlert = true;
          // Resetear el formulario y limpiar variables
          this.userForm.resetForm();
          this.name = '';
          this.apellido = '';
          this.email = '';
          this.account = '';
          this.password = '';
          this.confirmPassword = '';
          // Esperar 3 segundos antes de redirigir
          setTimeout(() => {
            this.spinnerService.hide();
            this.router.navigate(['/login-email']); // Ejemplo de ruta a la página de login
          }, 3000); // Tiempo en milisegundos (3 segundos)
        },
        error: (error) => {
          // Error al registrar usuario
          this.spinnerService.hide();
          this.showFirebaseErrorAlert = true;
          console.error('Error signing up:', error);
        }
      });
  }

  closeAlerts() {
    // Método para cerrar todas las alertas
    this.showPasswordMismatchAlert = false;
    this.showFirebaseErrorAlert = false;
    this.showSignUpSuccessAlert = false;
  }

  updateAccountFromEmail() {
    // Actualizar el campo de cuenta basado en el campo de correo electrónico
    const emailParts = this.email.split('@');
    if (emailParts.length > 0) {
      this.account = emailParts[0]; // Asignar el nombre de usuario antes del dominio
    } else {
      this.account = this.email; // Usar el correo electrónico completo si no hay '@'
    }
  }
}