// ##### IONIC & ANGULAR
import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-sample',
  templateUrl: './modal-sample.component.html',
  styleUrls: ['./modal-sample.component.scss'],
})
export class ModalSampleComponent {
  modalCtrl = inject(ModalController);
}
