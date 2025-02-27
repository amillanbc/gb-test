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
      comp: 'Input',
      route: '/input',
    },
    {
      comp: 'Select',
      route: '/select',
    },
    {
      comp: 'Checkbox',
      route: '/checkbox',
    },
    {
      comp: 'Toggle',
      route: '/toggle',
    },
    {
      comp: 'Forms',
      route: '/forms',
    },
    {
      comp: 'Modals',
      route: '/modals',
    },
    {
      comp: 'Toast',
      route: '/toast',
    },
    {
      comp: 'Progress Bar',
      route: '/progress-bar',
    },
    {
      comp: 'Typography',
      route: '/typography',
    },
    {
      comp: 'Spacing',
      route: '/spacing',
    },
    {
      comp: 'Colors',
      route: '/colors',
    },
    {
      comp: 'Shadows',
      route: '/shadows',
    },
  ]);

  // ##### METHODS
  goToCompPage(path: string) {
    this.router.navigate([`/base${path}`]);
  }
}
