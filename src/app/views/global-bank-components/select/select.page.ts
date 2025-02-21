// ##### IONIC & ANGULAR
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbSelectComponent } from 'src/app/components/global/gb-select/gb-select.component';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    GbSelectComponent,
    IonRow,
    IonCol,
    Highlight,
  ],
})
export class SelectPage {
  // ##### SIGNALS
  selectVal1 = signal('');
  selectVal2 = signal('');
  selectVal3 = signal('');

  options = [
    {
      label: 'Option 1',
      value: 'option_1',
    },
    {
      label: 'Option 2',
      value: 'option_2',
    },
    {
      label: 'Option 3',
      value: 'option_3',
    },
  ];

  default = `
  <gb-select
    placeholder="Seleccione una opción"
    [(value)]="selectVal1"
    [options]="options" />
  `;

  disabled = `
  <gb-select
    placeholder="Seleccione una opción"
    [(value)]="selectVal2"
    [options]="options"
    [disabled]="true" />
  `;

  required = `
  <gb-select
    placeholder="Seleccione una opción"
    [(value)]="selectVal3"
    [options]="options"
    [required]="true" />
  `;

  selOptions = `
  options = [
    {
      label: 'Option 1',
      value: 'option_1',
    },
    {
      label: 'Option 2',
      value: 'option_2',
    },
    {
      label: 'Option 3',
      value: 'option_3',
    },
  ];
  `;
}
