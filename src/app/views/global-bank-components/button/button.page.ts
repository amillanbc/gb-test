// ##### IONIC & ANGULAR
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbBtnComponent } from 'src/app/components/global/gb-btn/gb-btn.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonContent, GbBtnComponent],
})
export class ButtonPage {}
