import { Component, inject, input, signal } from '@angular/core';
import { IonList, IonItem, PopoverController } from '@ionic/angular/standalone'
@Component({
  selector: 'gb-popover-content',
  templateUrl: './gb-popover-content.component.html',
  styleUrls: ['./gb-popover-content.component.scss'],
  imports: [IonList, IonItem]
})
export class GbPopoverContentComponent {
  
  // ##### INJECTS
  popoverController = inject(PopoverController);

  // ##### INPUTS
  options = input<{ label: string; value: string }[]>([]);
  identity = input('');
  translucent = input('true');
  showBackdrop = input('true');
  side = input(''); // Posición en la parte inferior
  alignment = input('center');

  // ##### SIGNALS
  value = signal('');

  handleChange(event: any): void {
    
    //const target = event.target as HTMLButtonElement;
    console.log('Entro al evento', event)
    this.popoverController.dismiss({ action: event});
  }

  setOptionId(index: number) {
    if (!this.identity()) return '';
    return `${this.identity()}_opt_${index}`;
  }
}
