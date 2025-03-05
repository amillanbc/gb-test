// ##### IONIC & ANGULAR
import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'gb-toggle',
  templateUrl: './gb-toggle.component.html',
  styleUrls: ['./gb-toggle.component.scss'],
})
export class GbToggleComponent {
  // ##### INPUTS
  identity = input.required<string>();
  value = input.required<boolean>();
  label = input('');
  labelPosition = input<'left' | 'right'>('left');
  color = input('blue');
  level = input(500);
  disabled = input(false);
  extraClasses = input('');

  // ##### OUTPUTS
  valueChange = output<boolean>();

  // ##### METHODS
  updateValue(): void {
    this.valueChange.emit(!this.value());
  }

  // ##### COMPUTED
  classes = computed(() => {
    let color = this.color();
    let level = this.level();
    let classes = `slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200`;
    if (this.disabled()) classes += ` slider:bg-gb-${color}-200 bg-gray-3`;
    else classes += ` slider:bg-gb-${color}-${level} bg-[#CCCCCE]`;
    return classes;
  });

  labelClasses = computed(() => {
    let classes =
      'themeSwitcherTwo relative inline-flex select-none items-center';
    if (this.disabled()) classes += ` cursor-not-allowed`;
    else classes += ` cursor-pointer`;
    return classes;
  });
}
