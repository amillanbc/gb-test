import { Injectable, inject } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';

// ##### MODELS
import FormObject from '../types/FormObject';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  modalCtrl = inject(ModalController);

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

  validateForm(formData: FormObject) {
    let isValid = true;
    for (let field in formData) {
      const val = formData[field].value();
      const validator = formData[field].validator;
      const min = formData[field].min;
      const max = formData[field].max;
      const num = parseFloat(`${val}`);
      if (typeof validator == 'boolean' && val != validator) isValid = false;
      if (typeof val == 'string') {
        if (typeof validator == 'string') {
          const regex = new RegExp(validator);
          if (typeof val == 'string' && !regex.test(val)) isValid = false;
        }
        if (min || max) {
          if (isNaN(num)) isValid = false;
          else {
            if (min != undefined && num < min) isValid = false;
            if (max != undefined && num > max) isValid = false;
          }
        }
      }
    }
    return isValid;
  }
}
