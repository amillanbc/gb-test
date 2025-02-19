// ##### IONIC & ANGULAR
import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbBtnComponent } from 'src/app/components/global/gb-btn/gb-btn.component';

// ##### SERVICES
import { Utils } from 'src/app/stores/utils.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
  standalone: true,
  imports: [IonContent, GbBtnComponent],
})
export class ModalsPage {
  utils = inject(Utils);

  async openModal() {
    const modalResp = await this.utils.showGenericModal(
      {
        type: 'warning',
        header: 'Estimado cliente.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie molestie mi id vehicula. Aliquam sodales congue vulputate.',
        primary: 'Aceptar',
        secondary: 'Cancelar',
      },
      true
    );
    console.log(modalResp);
  }
}
