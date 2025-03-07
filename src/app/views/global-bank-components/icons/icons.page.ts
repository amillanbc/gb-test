// ##### IONIC & ANGULAR
import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbIconComponent } from 'components-library';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.page.html',
  styleUrls: ['./icons.page.scss'],
  standalone: true,
  imports: [IonCol, IonContent, IonRow, IonCol, GbIconComponent, Highlight],
})
export class IconsPage {
  base = `<gb-icon icon="home-outline" />`;
  fromFile = `// Icon must be added to /assets/icon in .svg format \n// The value for icon="" should be the svg file name\n<gb-icon icon="handshake" [fromFile]="true" />`;
  fromSrc = `// Icon must be added to /assets/icon in .svg format \n// The value for icon="" should be the svg file name\n<gb-icon icon="logomark" [fromSrc]="true" />`;
  colors = `<gb-icon icon="home-outline" color="gb-cyan-500" />`;
  sizePx = `<gb-icon icon="home-outline" size="48px" />`;
  sizeRem = `<gb-icon icon="home-outline" size="3rem" />`;
  sizeGb = `<gb-icon icon="home-outline" size="display-xl" />`;
}
