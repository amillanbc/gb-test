// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbInputComponent } from 'src/app/components/global/gb-input/gb-input.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonContent, GbInputComponent],
})
export class InputPage {
  input1 = signal('');
}
