// ##### IONIC & ANGULAR
import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-sample',
  templateUrl: './modal-sample.component.html',
  styleUrls: ['./modal-sample.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonButton],
})
export class ModalSampleComponent {
  modalCtrl = inject(ModalController);

  // ##### METHODS
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
