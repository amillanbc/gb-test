import { Component, inject } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbBtnComponent } from 'src/app/components/global/gb-btn/gb-btn.component';

// ##### OTHER COMPONENTS
import { ModalSampleComponent } from 'src/app/components/modal-sample/modal-sample.component';

// ##### SERVICES
import { Utils } from 'src/app/stores/utils.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonContent, GbBtnComponent],
})
export class ModalsPage {
  utils = inject(Utils);

  async openModal() {
    const modalResp = await this.utils.openModal({
      type: 'warning',
      header: 'Lorem ipsum dolor',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie molestie mi id vehicula. Aliquam sodales congue vulputate.',
      primary: 'Aceptar',
      secondary: 'Cancelar',
    });
    console.log(modalResp);
  }

  async openCustomModal() {
    const modalResp = await this.utils.openModal(
      {},
      false,
      ModalSampleComponent
    );
    console.log(modalResp);
  }

  async openFullscreenModal() {
    const modalResp = await this.utils.openModal(
      {},
      true,
      ModalSampleComponent
    );
    console.log(modalResp);
  }
}
