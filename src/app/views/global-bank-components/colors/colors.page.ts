// ##### IONIC & ANGULAR
import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
  standalone: true,
  imports: [IonCol, IonContent, IonRow, Highlight],
})
export class ColorsPage {
  colors = [
    'gray-light',
    'gray-dark',
    'blue',
    'cyan',
    'pink',
    'green',
    'yellow',
    'error',
    'warning',
    'success',
    'tap-blue',
    'tap-yellow',
    'tap-pink',
    'tap-cyan',
    'tap-aquamarine',
    'tap-error',
  ];
  levels = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  // ##### METHODS
  returnCode(preClass: string, color: string) {
    return `<div class="${preClass}-gb-${color}-400">Content</div>`;
  }
}
