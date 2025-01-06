import { Component, OnInit } from '@angular/core';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { homeOutline, cogOutline, newspaperOutline } from 'ionicons/icons';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  imports: [IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class AppLayoutComponent implements OnInit {
  constructor() {
    addIcons({ homeOutline, cogOutline, newspaperOutline });
  }

  ngOnInit() {}
}
