// ##### IONIC & ANGULAR
import { Component, inject, input, computed } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkOutline, warningOutline, alertOutline } from 'ionicons/icons';
import { ModalController } from '@ionic/angular/standalone';

// ##### TYPES
export enum ModalEnum {
  SUCCESS = "success",
  CANCEL = "cancel"
}

// ##### GB COMPONENTS
import { GbBtnComponent } from '../gb-btn/gb-btn.component';
@Component({
  selector: 'gb-generic-modal',
  templateUrl: './gb-generic-modal.component.html',
  styleUrls: ['./gb-generic-modal.component.scss'],
  imports: [IonGrid, IonRow, IonCol, IonIcon, GbBtnComponent],
})
export class GbGenericModalComponent {
  constructor() {
    addIcons({ checkmarkOutline, warningOutline, alertOutline });
  }

  // ##### INPUTS
  type = input<'checkmark' | 'warning' | 'alert'>('checkmark');
  header = input('');
  body = input('');
  primary = input('');
  secondary = input('');

  // ##### INJECTS
  modalCtrl = inject(ModalController);

  // ##### METHODS
  closeModal(action?: string) {
    this.modalCtrl.dismiss({ action: action });
  }

  // ##### COMPUTED
  bodyText = computed(() => `${this.body}`);
  headerText = computed(() => `${this.header}`);
  primaryText = computed(() => `${this.primary}`);
  secondaryText = computed(() => `${this.secondary}`);
}
