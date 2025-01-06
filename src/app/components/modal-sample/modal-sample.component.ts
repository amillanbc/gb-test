import { Component, input, computed } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-sample',
  templateUrl: './modal-sample.component.html',
  styleUrls: ['./modal-sample.component.scss'],
  imports: [IonButton],
})
export class ModalSampleComponent {
  constructor(private modalCtrl: ModalController) {}

  // ##### METHODS
  closeModal(action?: string) {
    this.modalCtrl.dismiss({ action: action });
  }

  // ##### COMPUTED
  showText = computed(() => this.bodyText);

  // ##### PROPS
  bodyText = input.required<string>();
}
