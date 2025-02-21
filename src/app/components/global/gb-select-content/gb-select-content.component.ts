// ##### IONIC & ANGULAR
import { Component, input, inject, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonList,
  IonItem,
  IonRadioGroup,
  IonRadio,
  ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'gb-select-content',
  templateUrl: './gb-select-content.component.html',
  styleUrls: ['./gb-select-content.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonList,
    IonItem,
    IonRadioGroup,
    IonRadio,
  ],
})
export class GbSelectContentComponent {
  // ##### INJECTS
  modalCtrl = inject(ModalController);

  // ##### INPUTS
  options = input<{ label: string; value: string }[]>([]);
  identity = input('');

  // ##### SIGNALS
  value = signal('');

  // ##### METHODS
  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.modalCtrl.dismiss({ action: target.value });
  }

  setOptionId(index: number) {
    if (!this.identity()) return '';
    return `${this.identity()}_opt_${index}`;
  }
}
