// ##### IONIC & ANGULAR
import { Component, OnInit, signal, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';

// ##### SERVICES
import { AppStore } from 'src/app/stores/app-store.service';
import { Utils as LibUtils } from 'components-library';

// ##### COMPONENTS
import { ModalSampleComponent } from 'src/app/components/modal-sample/modal-sample.component';
import { ModalSample2Component } from 'src/app/components/modal-sample-2/modal-sample-2.component';

// ##### TYPES
import User from 'src/app/types/User';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton],
})
export class DetailsPage implements OnInit {
  // ##### INJECTIONS
  appStore = inject(AppStore);
  libUtils = inject(LibUtils);

  constructor() {}

  // ##### SIGNALS
  itemsList = signal(['Apples', 'Bananas', 'Pears']);
  newUser = signal<User>({ name: 'John', lastName: 'Doe', age: 20 });

  // ##### METHODS
  /**
   * Opens modal component 1
   */
  async openModal() {
    const modalResp = await this.libUtils.openModal({
      props: {
        bodyText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis pretium massa, at pretium tortor congue nec.',
      },
      comp: ModalSampleComponent,
    });
    console.log('MODAL RESP:', modalResp);
  }

  /**
   * Opens modal component 2
   */
  async openModal2() {
    const modalResp = await this.libUtils.openModal({
      props: {},
      comp: ModalSample2Component,
    });
    console.log('MODAL RESP:', modalResp);
  }

  // ##### LC HOOKS
  ngOnInit() {}
}
