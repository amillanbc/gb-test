// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';

// ##### COMPONENTS
import { FullNameComponent } from 'src/app/components/full-name/full-name.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonInput,
    FormsModule,
    FullNameComponent,
  ],
})
export class FormPage {
  constructor() {}

  // ##### SIGNALS
  name = signal('');
  lastName = signal('');

  // ##### METHODS
  /**
   * Opens an alert with the full name emited child from component
   *
   * @param emitEvent - Emited param from child component
   *
   * @example
   * ```typescript
   * const nameObj = { name: 'John', lastName: 'Doe' }
   * alertFullName(nameObj);
   * ```
   */
  alertFullName(emitEvent: { name: string; lastName: string }) {
    alert(`${emitEvent.name} ${emitEvent.lastName}`);
  }
}
