import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  constructor(private modalCtrl: ModalController) {}

  /**
   * Opens an Ionic component modal with the content and attributes passed in the function params
   *
   * @param comp - The Angular component that shoud be shown in the modal
   * @param props - An object with the Inputs used in the component
   * @param id - The ID attribute assigned to the modal | default 'dialog-modal'
   * @returns Will return undefined or a string with the action taken by user click
   *
   * @example
   * ```typescript
   * const comp = ExampleAngularComponent;
   * const props = {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'};
   * const id = 'modal-unique-id';
   * const modal = await showGenericModal(comp, id, props, canDismiss);
   * console.log(modal); // 'accept' || undefined
   * ```
   */
  async showGenericModal(
    comp: any,
    props: object,
    id: string = 'dialog-modal'
  ) {
    const modal = await this.modalCtrl.create({
      component: comp,
      id: id,
      componentProps: props,
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) return data.action;
    return undefined;
  }
}
