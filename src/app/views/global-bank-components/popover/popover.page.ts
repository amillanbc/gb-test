import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCol, IonRow } from '@ionic/angular/standalone';
import { GbPopoverComponent } from "../../../components/global/gb-popover/gb-popover.component";
// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonContent, CommonModule, FormsModule, GbPopoverComponent, Highlight]
})
export class PopoverPage {
  // ##### SIGNALS
  selectVal1 = signal('');
  selectVal2 = signal('');

  options = [
    {
      label: 'Option 1 characters quantity are many',
      value: 'option_1',
    },
    {
      label: 'Option 2 characters quantity are many',
      value: 'option_2',
    },
    {
      label: 'Option 3 characters quantity are many',
      value: 'option_3',
    },
  ];

  constructor() { }

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

  default = `
  <gb-popover
    label="Seleccione una opción"
    [(value)]="selectVal1"
    [options]="options" />
  `;

  disabled = `
  <gb-popover
    label="Seleccione una opción"
    [(value)]="selectVal2"
    [options]="options"
    [disabled]="true" />
  `;

}
