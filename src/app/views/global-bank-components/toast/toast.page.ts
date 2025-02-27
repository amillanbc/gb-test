// ##### IONIC & ANGULAR
import { Component , inject} from '@angular/core';
import { IonContent, IonCol, IonRow } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbBtnComponent } from 'src/app/components/global/gb-btn/gb-btn.component';

// ##### SERVICES
import { Utils } from 'src/app/stores/utils.service';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonContent, GbBtnComponent, Highlight]
})
export class ToastPage {
  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHODS
  openGenericToast() {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'information-circle-outline'
      }
    )
  }

  openToastWithColor(type: 'default' | 'success' | 'warning' | 'error') {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: type
      }
    )
  }

  openCustomToast () {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'airplane-outline',
        header: 'Lorem ipsum.',
        color: 'pink',
        duration: 5000,
        position: 'bottom'
      }
    )
  }

  // ##### SNIPPETS
  default = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHOD
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'information-circle-outline'
    }
  )
  `

  colors = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHODS
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: 'default' // <-- 'default' | 'success' | 'warning' | 'error'
    }
  )
  `

  custom = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHOD
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'airplane-outline',
        header: 'Lorem ipsum.',
        color: 'pink', // GB Colors
        duration: 5000,
        position: 'bottom' // 'top' | 'bottom'
    }
  )
  `
}
