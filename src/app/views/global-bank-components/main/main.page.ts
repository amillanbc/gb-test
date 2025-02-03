import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRow,
    IonCol,
  ],
})
export class MainPage {
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
  ]);
}
