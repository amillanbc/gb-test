import { Component, inject } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbBtnComponent } from 'src/app/components/global/gb-btn/gb-btn.component';

// ##### OTHER COMPONENTS
import { ModalSample2Component } from 'src/app/components/modal-sample-2/modal-sample-2.component';
import { ModalSampleComponent } from 'src/app/components/modal-sample/modal-sample.component';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

// ##### SERVICES
import { Utils as LibUtils } from 'components-library';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonContent, GbBtnComponent, Highlight],
})
export class ModalsPage {
  libUtils = inject(LibUtils);

  async openModal() {
    const modalResp = await this.libUtils.openModal({
      props: {
        type: 'warning',
        header: 'Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie molestie mi id vehicula. Aliquam sodales congue vulputate.',
        primary: 'Aceptar',
        secondary: 'Cancelar',
      },
    });
    console.log(modalResp);
  }

  async openCustomModal() {
    const modalResp = await this.libUtils.openModal({
      comp: ModalSample2Component,
    });
    console.log(modalResp);
  }

  async openFullScreenModal() {
    const modalResp = await this.libUtils.openModal({
      mode: 'fullscreen',
      comp: ModalSampleComponent,
    });
    console.log(modalResp);
  }

  async openCardModal() {
    const modalResp = await this.libUtils.openModal({
      mode: 'card',
      comp: ModalSample2Component,
    });
    console.log(modalResp);
  }

  // CODE
  generic = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  async openModal() {
    const modalResp = await this.libUtils.openModal({
      props: {
        type: 'warning',
        header: 'Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie molestie mi id vehicula. Aliquam sodales congue vulputate.',
        primary: 'Aceptar',
        secondary: 'Cancelar',
      },
    });
    // Use modalResp in your code here
  }
  `;

  custom = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### OTHER COMPONENTS
  import { ModalSample2Component } from 'src/app/components/modal-sample-2/modal-sample-2.component';

  async openCustomModal() {
    const modalResp = await this.libUtils.openModal({
      comp: ModalSample2Component,
    });
    // Use modalResp in your code here
  }
  `;

  fullscreen = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### OTHER COMPONENTS
  import { ModalSampleComponent } from 'src/app/components/modal-sample/modal-sample.component';

  async openCustomModal() {
    const modalResp = await this.libUtils.openModal({
      mode: 'fullscreen',
      comp: ModalSampleComponent,
    });
    // Use modalResp in your code here
  }
  `;

  card = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### OTHER COMPONENTS
  import { ModalSample2Component } from 'src/app/components/modal-sample-2/modal-sample-2.component';

  async openCustomModal() {
    const modalResp = await this.libUtils.openModal({
      mode: 'card',
      comp: ModalSample2Component,
    });
    // Use modalResp in your code here
  }
  `;
}
