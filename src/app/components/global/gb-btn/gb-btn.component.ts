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
  color = input('blue');
  level = input(500);
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
    const level = this.level();
    const hover = this.level() + 100 > 950 ? 950 : this.level() + 100;
    const active = this.level() + 200 > 950 ? 950 : this.level() + 200;
    const disabled = this.level() - 200 < 25 ? 25 : this.level() - 200;
    let classes =
      'rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium gap-2.5';
    if (this.fill() == 'solid')
      classes += ` bg-gb-${color}-${level} text-white active:bg-gb-${color}-${active} disabled:bg-gb-${color}-${disabled} hover:bg-gb-${color}-${hover} border-gb-${color}-${level} active:border-gb-${color}-${active} hover:border-gb-${color}-${hover}`;
    if (this.fill() == 'outline')
      classes += `  text-gb-${color}-${level} bg-gb-no-color border-gb-${color}-${level} hover:bg-gb-${color}-50 active:bg-gb-${color}-${level} active:text-gb-${color}-50 disabled:bg-no-color disabled:border-gb-${color}-${disabled} disabled:text-gb-${color}-${disabled}`;
    classes += ` ${this.extraClasses()}`;
    return classes;
  });
}
