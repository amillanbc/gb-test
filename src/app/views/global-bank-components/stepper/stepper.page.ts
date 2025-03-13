// ##### IONIC & ANGULAR
import { Component } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbStepperComponent } from 'src/app/components/global/gb-stepper/gb-stepper.component';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
  standalone: true,
  imports: [IonContent, IonRow, IonCol, GbStepperComponent, Highlight],
})
export class StepperPage {
  stepperCode = `<gb-stepper [steps]="4" [current]="2" />`;
}
