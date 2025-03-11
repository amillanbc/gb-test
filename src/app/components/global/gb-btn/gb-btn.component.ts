// ##### IONIC & ANGULAR
import { Component, input, computed } from '@angular/core';
import { IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

@Component({
  selector: 'gb-btn',
  templateUrl: './gb-btn.component.html',
  styleUrls: ['./gb-btn.component.scss'],
  imports: [IonIcon, IonSpinner],
})
export class GbBtnComponent {
  constructor() {
    addIcons(icons);
  }

  // ##### INPUTS
  label = input('');
  color = input<
    | 'blue'
    | 'pink'
    | 'error'
    | 'warning'
    | 'success'
    | 'cyan'
    | 'yellow'
    | 'lime'
  >('blue');
  fill = input<'solid' | 'outline'>('solid');
  icon = input<string>();
  iconPosition = input<'left' | 'right'>('left');
  spinner = input<
    | 'dots'
    | 'lines'
    | 'lines-small'
    | 'lines-sharp'
    | 'lines-sharp-small'
    | 'bubbles'
    | 'circles'
    | 'circular'
    | 'crescent'
  >();
  spinnerPosition = input<'left' | 'right'>('left');
  disabled = input(false);
  extraClasses = input('');
  identity = input('');

  // ##### COMPUTED
  classes = computed(() => {
    const color = this.color();
    let classes =
      'rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium gap-2.5 disabled:text-gb-gray-dark-600';
    if (this.fill() == 'solid')
      classes += ` disabled:bg-gb-gray-light-500 disabled:text-gb-dark-600 bg-gb-${color}-500 text-white active:bg-gb-${color}-600 hover:bg-gb-${color}-400 border-gb-${color}-500 active:border-gb-${color}-600 hover:border-gb-${color}-400`;
    if (this.fill() == 'outline')
      classes += ` active:text-gb-gray-light-400 text-gb-${color}-500 active:text-white bg-gb-no-color border-gb-${color}-500 hover:bg-gb-${color}-50 active:bg-gb-${color}-500  disabled:bg-no-color disabled:border-gb-gray-light-600`;
    classes += ` ${this.extraClasses()}`;
    return classes;
  });
}
