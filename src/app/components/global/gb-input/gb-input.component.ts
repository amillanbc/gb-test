import {
  Component,
  input,
  output,
  signal,
  OnInit,
  effect,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gb-input',
  templateUrl: './gb-input.component.html',
  styleUrls: ['./gb-input.component.scss'],
  imports: [FormsModule],
})
export class GbInputComponent implements OnInit {
  constructor() {
    // ##### EFFECTS
    effect(() => {
      this.valueChange.emit(this.model());
    });
  }
  // ##### SIGNALS
  model = signal<string | number>('');

  // ##### INPUTS
  type = input<'text' | 'password' | 'email' | 'number'>('text');
  placeholder = input('');
  value = input.required<string | number>();

  // OUTPUTS
  valueChange = output<string | number>();

  // ##### LC HOOKS
  ngOnInit(): void {
    this.model.update(val => (val = this.value()));
  }
}
