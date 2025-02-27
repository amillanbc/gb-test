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

  openToastWithColor(color: string, icon: string) {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: icon,
        color: color
      }
    )
  }

  openToastWithOtherIcon () {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'airplane-outline'
      }
    )
  }

  openToastWithHeader () {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'information-circle-outline',
        header: 'Lorem ipsum'
      }
    )
  }

  openToastWithOtherDuration () {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'information-circle-outline',
        duration: 100
      }
    )
  }

  openToastWithOtherPosition () {
    this.utils.openToast(
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: 'information-circle-outline',
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
  // DEFAULT
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'information-circle-outline',
    }
  )

  // SUCCESS
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'checkmark-circle-outline',
      color: 'success'
    }
  )

  // WARNING
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'alert-circle-outline',
      color: 'warning'
    }
  )

  // ERROR
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'close-circle-outline',
      color: 'error'
    }
  )
  `

  icon = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHOD
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'airplane-outline' // <-- Ionicon here
    }
  )
  `

  header = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHOD
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'information-circle-outline',
      header: 'Lorem ipsum' // <-- Header text
    }
  )
  `

   duration = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHOD
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'information-circle-outline',
      duration: 100 // <-- Duration in ms
    }
  )
  `

  position = `
  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  // ##### INJECTS
  utils = inject(Utils)

  // ##### METHOD
  this.utils.openToast(
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'information-circle-outline',
      position: 'bottom // <-- Position "top" | "bottom"
    }
  )
  `
}
