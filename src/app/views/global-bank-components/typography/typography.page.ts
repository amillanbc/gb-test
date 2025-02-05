// ##### IONIC & ANGULAR
import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.page.html',
  styleUrls: ['./typography.page.scss'],
  standalone: true,
  imports: [IonContent, IonRow, IonCol, Highlight],
})
export class TypographyPage {
  sizes =
    '<div class="text-2xs">Lorem ipsum.</div>\n<div class="text-xs">Lorem ipsum.</div>\n<div class="text-sm">Lorem ipsum.</div>\n<div class="text-md">Lorem ipsum.</div>\n<div class="text-lg">Lorem ipsum.</div>\n<div class="text-xl">Lorem ipsum.</div>\n<div class="display-xs">Lorem ipsum.</div>\n<div class="display-sm">Lorem ipsum.</div>\n<div class="display-md">Lorem ipsum.</div>\n<div class="display-lg">Lorem ipsum.</div>\n<div class="display-xl">Lorem ipsum.</div>\n<div class="display-2xl">Lorem ipsum.</div>\n<div class="display-3xl">Lorem ipsum.</div>\n<div class="display-4xl">Lorem ipsum.</div>';
  weights =
    '<div class="text-lg w300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n<div class="text-lg w400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n<div class="text-lg w500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n<div class="text-lg w600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n<div class="text-lg w700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>';
}
