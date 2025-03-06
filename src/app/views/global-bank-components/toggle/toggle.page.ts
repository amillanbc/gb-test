// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbToggleComponent } from 'components-library';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
  standalone: true,
  imports: [IonContent, IonRow, IonCol, GbToggleComponent, Highlight],
})
export class TogglePage {
  // ##### SIGNALS
  isToggled = signal(false);

  primary = '<gb-toggle name="toggle_1" [(value)]="isToggled" />';
  label =
    '<gb-toggle name="toggle_2" [(value)]="isToggled" label="Toggle label" />';
  labelPosition =
    '<gb-toggle name="toggle_3" [(value)]="isToggled" label="Toggle label" labelPosition="right" />';
  color =
    '<gb-toggle name="toggle_4" [(value)]="isToggled" color="blue" />\n<gb-toggle name="toggle_5" [(value)]="isToggled" color="pink" />';
}
