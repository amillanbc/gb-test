import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';

@Injectable({
  providedIn: 'root',
})
export class IconLoader {
  private iconos = ['handshake'];

  async loadAllIcons() {
    let icns = {};
    for (let icn of this.iconos) {
      const path = `assets/icon/${icn}.svg`;
      const response = await fetch(path);
      const svgContent = await response.text();
      const key = icn;
      const iconsObj: { [key: string]: any } = {};
      iconsObj[key] =
        `data:image/svg+xml;utf8,${svgContent.replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill="currentColor"')}`;
      icns = { ...icns, ...iconsObj };
    }
    addIcons(icns);
  }
}
