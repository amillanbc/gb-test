// ##### IONIC & ANGULAR
import { Component, signal, computed } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ### STORES
import { AppStore } from 'src/app/stores/app-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonButton,
    IonToolbar,
    IonList,
    IonItem,
    IonInput,
    FormsModule,
  ],
})
export class LoginPage {
  constructor(private router: Router, private appStore: AppStore) {}

  // ##### SIGNALS
  user = signal('test@email.com');
  pass = signal('123456');

  // ##### METHODS

  /**
   * Validates user and password to login and redirect to home
   */
  login() {
    this.router.navigate(['/app/home']);
  }

  // ##### COMPUTED
  /**
   * Validates user and password matches required RegEx
   * * @returns Will return undefined or a string with the action taken by user click
   */
  isValidUserAndPass = computed(() => {
    const isValidEmail = this.appStore.emailRegex.test(this.user());
    const isValidPass = this.appStore.passRegex.test(this.pass());
    return !(isValidEmail && isValidPass);
  });
}
