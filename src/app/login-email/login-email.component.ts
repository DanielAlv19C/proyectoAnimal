import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SpinnerService } from '../spinner.service';
import { HttpClient,HttpErrorResponse,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-email',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-email.component.html',
  styleUrl: './login-email.component.css'
})

export class LoginEmailComponent {
  form: FormGroup;
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;
  showExtraAlert: boolean = false;
  loggeado: boolean = false; // inicialización de loggeado

  cuenta: string = ''; // variable para almacenar el nombre de usuario

  loading$ = this.spinnerService.loading$;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router, 
    private spinnerService: SpinnerService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.spinnerService.show();
    console.log('Form submitted');
    if (this.form.valid) {
      const { email, password } = this.form.value;

      const emailParts = email.split('@'); // separar el email en partes por el '@'
      this.cuenta = emailParts[0]; // tomar la primera parte (nombre de usuario)

      this.auth.login(email, password).subscribe({
        next: () => {
          this.spinnerService.hide();
          console.log('Logged in!');
          this.showSuccessAlert = true;
          this.loggeado = true; // establecer loggeado como true
          this.resetForm();
          setTimeout(() => {
            this.router.navigate(['/login-phone']);
          }, 120);
        },
        error: (error: any) => {
          this.spinnerService.hide();
          console.error('Error:', error);
          if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            this.showErrorAlert = true;
          } else {
            this.showExtraAlert = true;
          }
        },
      });
    }
  }

  resetForm() {
    this.form.reset();
  }

  closeAlerts() {
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
    this.showExtraAlert = false;
  }
}