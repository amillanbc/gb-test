// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbCheckboxComponent } from 'src/app/components/global/gb-checkbox/gb-checkbox.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonContent, GbCheckboxComponent],
})
export class CheckboxPage {
  // ##### SIGNALS
  isChecked = signal(false);
}
