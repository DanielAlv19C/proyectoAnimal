import { Injectable } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, RecaptchaVerifier,signInWithPhoneNumber, authState } from '@angular/fire/auth';
import { Observable } from 'rxjs'
import { from } from 'rxjs';
import { FirebaseApp } from '@angular/fire/app';
import firebase from 'firebase/compat/'; // Import the 'firebase' namespace
import 'firebase/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private isAdmin = false;
  private username: string = '';

  constructor( private firebaseAuth: Auth) { }

  usrlog$ = authState(this.firebaseAuth);

  login(email: string, password: string): Observable<void> {
    // Actualizar el campo de cuenta basado en el campo de correo electrónico
    const emailParts = email.split('@');
    if (emailParts.length > 0) {
      this.username = emailParts[0]; // Asignar el nombre de usuario antes del dominio
    } else {
      this.username = email; // Usar el correo electrónico completo si no hay '@'
    }
    this.isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', this.username);
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then ( () => {});
    return from(promise);
  }

  loginWithSms(phoneNumber: string, reCAPTCHA : RecaptchaVerifier): Observable<void> {
    // Login logic here
    const promise = signInWithPhoneNumber(
      this.firebaseAuth, 
      phoneNumber, 
      reCAPTCHA,

    ).then(() => {});
    return from(promise);
  }

  verifyOTP(verificationCode: string, confirmationResult: firebase.auth.ConfirmationResult) {
    return confirmationResult.confirm(verificationCode);
  }

  signUp(email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then(() => {});
    return from(promise);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
  }

  getUid(): Observable<string | null> {
    return new Observable((subscriber) => {
      this.usrlog$.subscribe((user: User | null) => {
        if (user) {
          subscriber.next(user.uid);
        } else {
          subscriber.next(null);
        }
        subscriber.complete();
      });
    });
  }

  getUsername(): string {
    return this.username;
  }

  checkLoginStatus(): boolean {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      this.username = sessionStorage.getItem('username') || '';
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

  checkAdmin(admin: string): boolean {
    this.isAdmin = false;
    if (admin === 'firebaseequipotw') { //Comprobar cuenta de administrador
      this.isAdmin = true;
    }
    return this.isAdmin;
  }


  
}