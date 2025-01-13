// ##### IONIC & ANGULAR
import { Component, input, output, computed } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.scss'],
  imports: [IonButton],
})
export class FullNameComponent {
  constructor() {}

  // ##### INPUTS
  n = input.required<string>();
  ln = input.required<string>();

  // ##### OUTPUTS
  nameOutput = output<{ name: string; lastName: string }>();

  // ##### METHODS
  /**
   * Emits a call to parent component (output) containing the name and last name in upper case
   */
  callCompOutput() {
    this.nameOutput.emit({
      name: this.n().toUpperCase(),
      lastName: this.ln().toUpperCase(),
    });
  }

  // ##### COMPUTED
  /**
   * Emits a call to parent component (output) containing the name and last name in upper case
   */
  fullName = computed(() => `${this.n()} ${this.ln()}`);
}
