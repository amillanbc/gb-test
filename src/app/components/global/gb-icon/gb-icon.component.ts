// ##### IONIC & ANGULAR
import { Component, input, signal, OnInit, computed } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'gb-icon',
  templateUrl: './gb-icon.component.html',
  styleUrls: ['./gb-icon.component.scss'],
  imports: [IonIcon],
})
export class GbIconComponent implements OnInit {
  // ##### INPUTS
  icon = input.required<string>();
  color = input<string>();
  size = input<string>();
  fromSrc = input(false);
  fromFile = input(false);

  // ##### SIGNALS
  iconLoaded = signal(false);

  // ##### COMPUTED
  iconPath = computed(() => `assets/icon/${this.icon()}.svg`);

  // ##### LC HOOKS
  async ngOnInit(): Promise<void> {
    if (this.fromSrc()) return;
    let icns = { ...icons };
    if (this.fromFile()) {
      const response = await fetch(this.iconPath());
      const svgContent = await response.text();
      const key = this.icon();
      const iconsObj: { [key: string]: any } = {};
      iconsObj[key] =
        `data:image/svg+xml;utf8,${svgContent.replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill="currentColor"')}`;
      icns = { ...icns, ...iconsObj };
    }
    addIcons(icns);
    this.iconLoaded.update(() => true);
  }
}
