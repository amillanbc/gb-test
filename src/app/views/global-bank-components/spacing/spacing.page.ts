// ##### IONIC & ANGULAR
import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-spacing',
  templateUrl: './spacing.page.html',
  styleUrls: ['./spacing.page.scss'],
  standalone: true,
  imports: [IonContent, IonRow, IonCol, Highlight],
})
export class SpacingPage {
  marginsAndPaddings = [
    { class: 'a', desc: 'All' },
    { class: 'l', desc: 'Left' },
    { class: 't', desc: 'Top' },
    { class: 'b', desc: 'Bottom' },
    { class: 'r', desc: 'Right' },
    { class: 'y', desc: 'Top & Bottom' },
    { class: 'x', desc: 'Left & Right' },
  ];

  sizes = [
    { class: 'xxs', desc: '0.125 rem' },
    { class: 'xs', desc: '0.25 rem' },
    { class: 'sm', desc: '0.375 rem' },
    { class: 'md', desc: '0.5 rem' },
    { class: 'lg', desc: '0.625 rem' },
    { class: 'xl', desc: '0.75 rem' },
    { class: '2xl', desc: '1 rem' },
    { class: '3xl', desc: '1.25 rem' },
    { class: '4xl', desc: '1.5 rem' },
  ];

  borders = [
    { class: 'gb-rounded-border', desc: 'Border radius All' },
    { class: 'gb-rounded-border-tl', desc: 'Border radius Top Left' },
    { class: 'gb-rounded-border-tr', desc: 'Border radius Top Right' },
    { class: 'gb-rounded-border-bl', desc: 'Border radius Bottom Left' },
    { class: 'gb-rounded-border-br', desc: 'Border radius Bottom Right' },
  ];

  // ##### METHODS
  returnCode(pos: string, space: string) {
    return `<div class="gb-${space}${pos}-md"></div>`;
  }

  returnBorderRadiusCode(clss: string) {
    return `<div class="${clss}-md"></div>`;
  }
}
