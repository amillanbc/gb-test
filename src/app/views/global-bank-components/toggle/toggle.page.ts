// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbToggleComponent } from 'src/app/components/global/gb-toggle/gb-toggle.component';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
  standalone: true,
  imports: [IonContent, IonRow, IonCol, GbToggleComponent],
})
export class TogglePage {
  // ##### SIGNALS
  isToggled = signal(false);
}
