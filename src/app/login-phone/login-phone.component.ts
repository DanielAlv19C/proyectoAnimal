import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RecaptchaVerifier, getAuth } from '@angular/fire/auth';
import firebase from 'firebase/compat/';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-phone',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login-phone.component.html',
  styleUrl: './login-phone.component.css'
})

export class LoginPhoneComponent {
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;

  verificationCode: string = '';
  confirmationResult: firebase.auth.ConfirmationResult | null = null;
  form: FormGroup = this.fb.group({
    phone: ['', Validators.required],
  });

  recaptchaVerifier!: RecaptchaVerifier;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.recaptchaVerifier = new RecaptchaVerifier(
        getAuth(),
        'recaptcha-container',
        {
          size: 'normal',
          callback: (response: any) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            return response;
          },
        }
      );
      console.log('RecaptchaVerifier created');
      this.recaptchaVerifier.render().then(widgetId => {
        console.log('ReCAPTCHA rendered, widgetId is', widgetId);
      });
    });
  }

  onSubmit() {
    console.log('Form submitted');
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();

      this.auth
        .loginWithSms(rawForm.phone, this.recaptchaVerifier)
        .subscribe({
          next: (confirmationResult) => {
            console.log('Message sent!');
            this.confirmationResult = confirmationResult!;
          },
          error: (error: any) => {
            console.error('Error sending message:', error);
            // Handle the error here
          },
        });
    }
  }

  verifyOTP() {
    if (this.confirmationResult) {
      this.auth.verifyOTP(this.verificationCode, this.confirmationResult)
        .then((result) => {
          console.log('User signed in successfully!');
        })
        .catch((error) => {
          console.error('Error verifying OTP:', error);
          this.showErrorAlert = true;
        });
    } else {
      console.log('Logged in!');
          this.showSuccessAlert = true;
          this.resetForm();
          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 3000);
    }
  }

  resetForm() {
    this.form.reset();
  }

  closeAlerts() {
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
  }
}
