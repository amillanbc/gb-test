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
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

// ##### SERVICES
import { Utils } from 'src/app/stores/utils.service';

// ##### GB COMPONENTS
import { GbSelectContentComponent } from '../gb-select-content/gb-select-content.component';

@Component({
  selector: 'gb-select',
  templateUrl: './gb-select.component.html',
  styleUrls: ['./gb-select.component.scss'],
  imports: [IonIcon],
})
export class GbSelectComponent {
  constructor() {
    addIcons(icons);
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
  icon = input('');
  disabled = input(false);
  extraClasses = input('');
  required = input(false);
  identity = input('');

  // OUTPUTS
  valueChange = output<string>();

  // ##### SIGNALS
  selected = signal<string>('');
  focused = signal(false);

  // ##### METHODS
  async openSelect() {
    if (this.disabled()) return;
    const resp = await this.utils.openModal({
      comp: GbSelectContentComponent,
      fullscreen: true,
      props: {
        options: this.options,
        value: this.value(),
        identity: this.identity,
      },
    });
    if (resp != undefined) this.selected.update(val => (val = resp));
    this.wasFocused();
  }

  wasFocused() {
    this.focused.update(val => (val = true));
  }

  // ##### COMPUTED
  returnPlaceholder = computed(() => {
    let label = this.placeholder();
    if (this.required()) label += ' *';
    if (!this.value()) return { label: label, value: '' };
    const options = [...this.options()];
    const found = options.find(el => el.value == this.selected());
    return found || { label: '', value: '' };
  });

  classes = computed(() => {
    let classes =
      'relative z-20 w-full appearance-none rounded-md border border-stroke py-[10px] pr-12 outline-none transition';
    if (this.icon()) classes += ' pl-12';
    else classes += ' pl-4';
    if (this.disabled()) classes += ' cursor-not-allowed bg-gray-2';
    else classes += ' cursor-pointer';
    if (this.required() && this.focused()) {
      if (!this.selected())
        classes += ' focus:border-gb-error-500 border-gb-error-500';
      else classes += ' focus:border-gb-success-500 border-gb-success-500';
    }
    if (!this.selected()) classes += ' text-dark-6';
    return classes;
  });
}
