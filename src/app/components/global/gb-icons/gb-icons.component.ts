import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone'
import * as all from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-gb-icons',
  templateUrl: './gb-icons.component.html',
  styleUrls: ['./gb-icons.component.scss'],
  imports: [IonIcon]
})
export class GbIconsComponent implements OnInit {
  private http = inject(HttpClient);
  name = input<string>('');
  color = input<string>('');
  size = input<string>('1rem');
  level = input<string>('');
  isCustomIcons = input('false');
  ios = input<string>('');
  md = input<string>('');
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.isCustomIcons() == 'true') {
      this.loadSvgIcon();
    }
    else {
      addIcons(all);
    }


  }
  /*get iconPath(): string {
    return  // Ruta personalizada para iconos
  }*/

  private loadSvgIcon() {
    const iconPath = `assets/icon/${this.name()}.svg`; // Ruta del SVG

    this.http.get(iconPath, { responseType: 'text' }).subscribe({
      next: (svgContent) => {
        const div = this.renderer.createElement('div');
        div.innerHTML = svgContent;
        const svgElement = div.querySelector('svg');
        if (svgElement) {
          this.renderer.setStyle(svgElement, 'width', this.size());
          this.renderer.setStyle(svgElement, 'height', this.size());
          this.renderer.addClass(svgElement, `text-gb-${this.color()}-${this.level()}`);

          this.renderer.appendChild(this.el.nativeElement, svgElement);
        }
      },
      error: (error) => {
        console.error(`Error loading icon: ${iconPath}`, error);
      }
    });
  }

}
