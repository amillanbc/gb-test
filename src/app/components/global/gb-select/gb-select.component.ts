// ##### IONIC & ANGULAR
import {
  Component,
  signal,
  input,
  computed,
  output,
  effect,
  HostListener,
  ElementRef,
  inject,
} from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

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

  elRef = inject(ElementRef);
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen.update(() => false);
    }
  }

  // ##### INPUTS
  value = input.required<string>();
  options = input<{ label: string; value: string }[]>([]);
  label = input('');
  placeholder = input('');
  icon = input('');
  disabled = input(false);
  extraClasses = input('');
  required = input(false);
  identity = input('');

  // ##### OUTPUTS
  valueChange = output<string>();

  // ##### SIGNALS
  selected = signal<string>('');
  focused = signal(false);
  isDropdownOpen = signal(false);

  // ##### METHODS
  async openSelect() {
    if (this.disabled()) return;
    this.isDropdownOpen.update(() => !this.isDropdownOpen());
    this.wasFocused();
  }

  selectOption(option: string) {
    this.isDropdownOpen.update(() => false);
    this.selected.update(() => option);
  }

  wasFocused() {
    this.focused.update(() => true);
  }

  // ##### COMPUTED
  returnPlaceholder = computed(() => {
    let label = this.placeholder();
    if (this.required()) label += ' *';
    if (!this.value()) return { label: label, value: '' };
    const options = [...this.options()];
    const found = options.find(el => el.value === this.selected());
    return found || { label: '', value: '' };
  });

  classes = computed(() => {
    let classes =
      'relative z-20 w-full appearance-none rounded-md border border-stroke py-[10px] pr-12 outline-none transition';
    if (this.icon()) classes += ' pl-12';
    else classes += ' pl-4';
    if (this.disabled()) classes += ' cursor-not-allowed bg-gray-2';
    else classes += ' cursor-pointer bg-transparent';
    // if (this.required() && this.focused()) {
    //   if (!this.selected())
    //     classes += ' focus:border-gb-error-500 border-gb-error-500';
    //   else classes += ' focus:border-gb-success-500 border-gb-success-500';
    // }
    if (!this.selected()) classes += ' text-dark-6';
    return classes;
  });

  dropdownClasses = computed(() => {
    if (this.isDropdownOpen()) return 'top-full opacity-100 visible';
    return 'top-[110%] invisible opacity-0';
  });

  selectChevronIcon = computed(() => {
    if (this.isDropdownOpen()) return 'chevron-up-outline';
    else return 'chevron-down-outline';
  });
}
