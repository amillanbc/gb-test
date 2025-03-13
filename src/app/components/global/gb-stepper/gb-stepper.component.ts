import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'gb-stepper',
  templateUrl: './gb-stepper.component.html',
  styleUrls: ['./gb-stepper.component.scss'],
})
export class GbStepperComponent {
  // ##### INPUTS
  steps = input.required<number>();
  current = input(1);

  // ##### METHODS
  stepClass(index: number) {
    let classes =
      'relative z-10 mx-auto mb-[10px] flex h-9 w-9 items-center justify-center rounded-full border-2 text-base font-medium sm:h-[50px] sm:w-[50px] sm:text-xl';
    if (index < this.current())
      classes += ' bg-gb-pink-500 border-gb-pink-500 text-white';
    else classes += ' border-stroke bg-white text-gb-text-primary';
    if (index === this.current())
      classes += ' border-gb-pink-500 text-gb-pink-500';
    return classes;
  }

  strokeClass(index: number) {
    let classes =
      'absolute -right-[45px] top-[17px] block h-[2px] w-[80px] sm:-right-[60px] sm:top-[25px] sm:w-[120px]';
    if (index < this.current()) classes += ' bg-gb-pink-500';
    else classes += ' bg-stroke';
    return classes;
  }

  // ##### COMPUTED
  stepsLength = computed(() => [].constructor(this.steps()));
}
