// ##### IONIC & ANGULAR
import {
  Component,
  signal,
  input,
  inject,
  computed,
  output,
  effect,
} from '@angular/core';

// ##### SERVICES
import { Utils } from 'src/app/stores/utils.service';

// ##### GB COMPONENTS
import { GbSelectContentComponent } from '../gb-select-content/gb-select-content.component';

@Component({
  selector: 'gb-select',
  templateUrl: './gb-select.component.html',
  styleUrls: ['./gb-select.component.scss'],
})
export class GbSelectComponent {
  constructor() {
    effect(() => {
      this.valueChange.emit(this.selected());
    });
  }

  // ##### INJECTS
  utils = inject(Utils);

  // ##### INPUTS
  value = input.required<string>();
  options = input<{ label: string; value: string }[]>([]);
  placeholder = input('');

  // OUTPUTS
  valueChange = output<string>();

  // ##### SIGNALS
  selected = signal<string>('');

  // ##### METHODS
  async openSelect() {
    const resp = await this.utils.openModal({
      comp: GbSelectContentComponent,
      fullscreen: true,
      props: { options: this.options, value: this.value() },
    });
    this.selected.update(val => (val = resp));
  }

  // ##### COMPUTED
  returnPlaceholder = computed(() => {
    if (!this.value()) return { label: this.placeholder(), value: '' };
    const options = [...this.options()];
    const found = options.find(el => el.value == this.selected());
    return found || { label: '', value: '' };
  });
}
