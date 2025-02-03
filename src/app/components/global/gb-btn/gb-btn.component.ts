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

  // ##### COMPUTED
  classes = computed(() => {
    const c = this.color();
    const l = this.level();
    const h = this.level() + 100 > 950 ? 950 : this.level() + 100;
    const a = this.level() + 200 > 950 ? 950 : this.level() + 200;
    const d = this.level() - 200 < 25 ? 25 : this.level() - 200;
    let classes =
      'rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium gap-2.5';
    if (this.fill() == 'solid')
      classes += ` bg-gb-${c}-${l} text-white active:bg-gb-${c}-${a} disabled:bg-gb-${c}-${d} hover:bg-gb-${c}-${h} border-gb-${c}-${l} active:border-gb-${c}-${a} hover:border-gb-${c}-${h}`;
    if (this.fill() == 'outline')
      classes += `  text-gb-${c}-${l} bg-gb-no-color border-gb-${c}-${l} hover:bg-gb-${c}-50 active:bg-gb-${c}-${l} active:text-gb-${c}-50 disabled:bg-no-color disabled:border-gb-${c}-${d} disabled:text-gb-${c}-${d}`;
    classes += ` ${this.extraClasses()}`;
    return classes;
  });
}
