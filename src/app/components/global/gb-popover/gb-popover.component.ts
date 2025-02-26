import { Component, computed, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { Utils } from 'src/app/stores/utils.service';
import { GbPopoverContentComponent } from '../gb-popover-content/gb-popover-content.component';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

@Component({
  selector: 'gb-popover',
  templateUrl: './gb-popover.component.html',
  styleUrls: ['./gb-popover.component.scss'],
  imports: [IonIcon]
})
export class GbPopoverComponent {
  // ##### INJECTS
  utils = inject(Utils);

  // ##### INPUTS
  value = input.required<string>();
  options = input<{ label: string; value: string }[]>([]);
  icon = input('');
  disabled = input(false);
  extraClasses = input('');
  label = input('');
  identity = input('');
  interface = input('');
  constructor() {
    addIcons(icons);
    effect(() => {
      this.valueChange.emit(this.selected());
    });
  }
  // OUTPUTS
  valueChange = output<string>();

  // ##### SIGNALS
  selected = signal<string>('');
  focused = signal(false);


  async openPopover() {
    const resp = await this.utils.openPopover({
      comp: GbPopoverContentComponent,
      props: {
        options: this.options,
        value: this.value(),
        identity: this.identity,
        //event: ev,
        translucent: true,
        showBackdrop: true,
        side: 'top',
        alignment: 'left'
      },
    });
    if (resp != undefined) this.selected.update(val => (val = resp));
  }

  ///COMPUTED
  returnLabel = computed(()=>{
    let label=this.label();
    if(!this.value()) return { label: label, value: '' };
    const options = [...this.options()];
    const found = options.find(el => el.value == this.selected());
    return found || { label: '', value: '' };
  })
  classes = computed(() => {
    let classes =
      'relative z-20 w-full appearance-none rounded-md border border-stroke py-[10px] pr-12 outline-none transition';
    if (this.icon()) classes += ' pl-12';
    else classes += ' pl-4';
    if (this.disabled()) classes += ' cursor-not-allowed bg-gray-2';
    else classes += ' cursor-pointer';
    if (!this.selected()) classes += ' text-dark-6';
    return classes;
  });

}
