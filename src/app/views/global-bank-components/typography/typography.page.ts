import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.page.html',
  styleUrls: ['./typography.page.scss'],
  standalone: true,
  imports: [IonContent, IonRow, IonCol],
})
export class TypographyPage {}
