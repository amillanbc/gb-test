// ##### IONIC & ANGULAR
import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbBtnComponent } from 'components-library';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonContent, GbBtnComponent, Highlight, IonRow, IonCol],
})
export class ButtonPage {
  primary = '<gb-btn label="Button" />';
  outline = '<gb-btn label="Button" fill="outline" />';
  colors =
    '<gb-btn label="Button" color="blue" />\n<gb-btn label="Button" fill="solid" color="pink" />\n<gb-btn label="Button" color="blue" fill="outline" />\n<gb-btn label="Button" fill="outline" color="pink" />';
  level =
    '<gb-btn label="Button" [level]="300" />\n<gb-btn label="Button" [level]="400" />\n<gb-btn label="Button" [level]="500" />\n<gb-btn label="Button" [level]="600" />\n<gb-btn label="Button" [level]="700" />';
  disabled =
    '<gb-btn label="Button" [disabled]="true" />\n<gb-btn label="Button" [disabled]="true" fill="outline" />';
  icon = '<gb-btn label="Button" icon="home-outline" />';
  iconPosition =
    '<gb-btn label="Button" icon="home-outline" iconPosition="right" />';
  spinner = '<gb-btn spinner="bubbles" />';
  spinnerPosition =
    '<gb-btn label="Button" spinner="bubbles" spinnerPosition="right" />';
  extraClasses =
    '<gb-btn label="Button" extraClasses="rounded-md gb-pa-4xl" />';
}
