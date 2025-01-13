// ##### IONIC & ANGULAR
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
  /**
   * Closes the modal displayed
   */
  closeModal(action?: string) {
    this.modalCtrl.dismiss({ action: action });
  }

  // ##### COMPUTED
  /**
   * Returns the text to render in DOM
   * @returns String to render in DOM
   */
  showText = computed(() => this.bodyText);

  // ##### PROPS
  bodyText = input.required<string>();
}
