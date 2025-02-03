import { Component, input, output, Input } from '@angular/core';

@Component({
  selector: 'gb-toggle',
  templateUrl: './gb-toggle.component.html',
  styleUrls: ['./gb-toggle.component.scss'],
})
export class GbToggleComponent {
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
