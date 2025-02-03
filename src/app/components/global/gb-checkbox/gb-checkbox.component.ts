import { Component, input, output } from '@angular/core';

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

  updateValue(): void {
    this.valueChange.emit(!this.value());
  }
}
