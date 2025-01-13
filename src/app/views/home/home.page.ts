// ##### IONIC & ANGULAR
import { Component, signal, computed, effect, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonToggle,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ##### SERVICES
import { AppStore } from 'src/app/stores/app-store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonToggle,
    FormsModule,
  ],
})
export class HomePage {
  // ##### INJECTIONS
  appStore = inject(AppStore);

  constructor(private router: Router) {
    effect(() => {
      console.log(`COUNT INCREASED ${this.count()}`);
    });
  }

  // ##### SIGNALS
  count = signal(0);
  canAdd = signal(false);
  inputText = signal('');

  // ##### METHODS
  /**
   * Logs the user out and redirects to the login view
   */
  logout() {
    this.router.navigate(['/base/login']);
  }

  /**
   * Increases the counter value by one
   */
  add() {
    console.log('UPDATE STATE');
    this.appStore.clientName.set('Pablo');
    console.log('STATE UPDATED', this.appStore.clientName());
    this.count.update(val => val + 1);
  }

  // ##### COMPUTED
  /**
   * Calculates the counter value multiplied by 2
   * @returns Will return number counter doubled
   */
  doubleCount = computed(() => this.count() * 2);
}
