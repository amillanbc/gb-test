// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
// import { GbCheckboxComponent } from 'components-library';
import { GbCheckboxComponent } from 'src/app/components/global/gb-checkbox/gb-checkbox.component';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonContent, GbCheckboxComponent, Highlight, IonRow, IonCol],
})
export class CheckboxPage {
  // ##### SIGNALS
  isChecked = signal(false);

  primary =
    '<gb-checkbox [(value)]="isChecked" name="checkbox_1" label="Checkbox label" />';
  colors =
    '<gb-checkbox [(value)]="isChecked" name="checkbox_2" label="Checkbox label" />\n<gb-checkbox [(value)]="isChecked" name="checkbox_3" label="Checkbox label" color="pink" />';
  disabled =
    '<gb-checkbox [(value)]="isChecked" name="checkbox_4" label="Checkbox label" [disabled]="true" />';
}
