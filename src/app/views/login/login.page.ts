// ##### IONIC & ANGULAR
import { Component, signal, computed, inject } from '@angular/core';
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

// ##### SERVICES
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
  // ##### INJECTIONS
  appStore = inject(AppStore);

  constructor(private router: Router) {}

  // ##### SIGNALS
  user = signal('test@email.com');
  pass = signal('123456');
  isToggled = signal(true);
  isChecked = signal(true);
  inputText = signal('');
  levels = signal([25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);

  // ##### METHODS
  login() {
    this.router.navigate(['/app/home']);
  }

  // ##### COMPUTED
  isValidUserAndPass = computed(() => {
    const isValidEmail = this.appStore.emailRegex.test(this.user());
    const isValidPass = this.appStore.passRegex.test(this.pass());
    return !(isValidEmail && isValidPass);
  });
}
