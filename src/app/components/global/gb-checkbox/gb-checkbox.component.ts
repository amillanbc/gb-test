// ##### IONIC & ANGULAR
import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'gb-checkbox',
  templateUrl: './gb-checkbox.component.html',
  styleUrls: ['./gb-checkbox.component.scss'],
})
export class GbCheckboxComponent {
  // ##### INPUTS
  name = input.required<string>();
  value = input.required<boolean>();
  label = input('');
  color = input('blue');
  level = input(500);
  disabled = input(false);
  extraClasses = input('');

  // OUTPUTS
  valueChange = output<boolean>();

  // ##### METHODS
  updateValue(): void {
    this.valueChange.emit(!this.value());
  }

  // ##### COMPUTED
  classes = computed(() => {
    const c = this.color();
    const l = this.level();
    let classes = `flex items-center justify-center w-5 h-5 mr-4 border border-stroke rounded box box:border-gb-${c}-${l}`;
    if (this.disabled()) classes += ` bg-gray-2`;
    classes += ` ${this.extraClasses()}`;
    return classes;
  });
}
