// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonRow, IonCol],
})
export class MainPage {
  constructor(private router: Router) {}

  // ##### SIGNALS
  gbComponents = signal([
    {
      comp: 'Button',
      route: '/button',
    },
    {
      comp: 'Toggle',
      route: '/toggle',
    },
    {
      comp: 'Input',
      route: '/input',
    },
    {
      comp: 'Checkbox',
      route: '/checkbox',
    },
    {
      comp: 'Tipografía',
      route: '/typography',
    },
    {
      comp: 'Espaciados',
      route: '/spacing',
    },
    {
      comp: 'Colores',
      route: '/colors',
    },
    {
      comp: 'Sombras',
      route: '/shadows',
    },
  ]);

  // ##### METHODS
  goToCompPage(path: string) {
    this.router.navigate([`/base${path}`]);
  }
}
