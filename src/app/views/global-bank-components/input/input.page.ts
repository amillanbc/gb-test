// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbInputComponent } from 'src/app/components/global/gb-input/gb-input.component';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonContent, GbInputComponent, IonRow, IonCol, Highlight],
})
export class InputPage {
  // ##### INPUTS
  input1 = signal('');

  primary = '<gb-input [(value)]="input1" placeholder="Type here" label="Input label" />';
  type =
    '<gb-input [(value)]="input1" placeholder="Type text (default)" />\n<gb-input [(value)]="input1" placeholder="Type password" [passwordToggle]="true" type="password" />\n<gb-input [(value)]="input1" placeholder="Type email (for mobile)" type="email" />\n<gb-input [(value)]="input1" placeholder="Type number" type="number" />';
  disabled =
    '<gb-input [(value)]="input1" placeholder="Type here" [disabled]="true" />';
  colors =
    '<gb-input [(value)]="input1" placeholder="Type here" color="blue" />\n<gb-input [(value)]="input1" placeholder="Type here" color="pink" />';
  icon =
    '<gb-input [(value)]="input1" placeholder="Type here" icon="person-outline" />';
  validation =
    '<gb-input [(value)]="input1" placeholder="Type here" regex="^[A-Za-z0-9]{6,}$" />';
  minmax =
    '<gb-input [(value)]="input1" placeholder="Type here" [min]="1" [max]="10" />';
  required =
    '<gb-input [(value)]="input1" placeholder="Type here" [required]="true" />';
}
