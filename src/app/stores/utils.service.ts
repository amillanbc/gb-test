// ##### IONIC & ANGULAR
import { Injectable, inject } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';

// ##### MODELS
import FormObject from '../types/FormObject';

// ##### GB COMPONENTS
import { GbGenericModalComponent } from '../components/global/gb-generic-modal/gb-generic-modal.component';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  modalCtrl = inject(ModalController);

  async openModal({
    props,
    fullscreen = false,
    comp = GbGenericModalComponent,
  }: {
    props?: object;
    fullscreen?: boolean;
    comp?: any;
  }) {
    // props: object, fullscreen: boolean = false, comp?: any
    const modal = await this.modalCtrl.create({
      component: comp || GbGenericModalComponent,
      id: fullscreen ? '' : 'dialog-modal',
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
      const [val, validator, min, max] = [
        formData[field].value(),
        formData[field].validator,
        formData[field].min,
        formData[field].max
      ]
      const num = parseFloat(`${val}`);
      if (typeof validator === 'boolean' && val !== validator) isValid = false;
      if (typeof val === 'string' && typeof validator === 'string') {
        isValid = this.validateString(validator, val)
      }
      if (typeof val === 'string' && (min || max)) {
        isValid = this.validateMinMax(min, max, num)
      }
    }
    return isValid;
  }

  validateString(validator: string, val: string): boolean {
    let isValid = true
    const regex = new RegExp(validator);
    if (typeof val === 'string' && !regex.test(val)) isValid = false;
    return isValid
  }

  validateMinMax(min: number | undefined, max: number | undefined, num: number): boolean {
    let isValid = true
    if (isNaN(num)) isValid = false;
    else {
      if (typeof min !== "undefined" && num < min) isValid = false;
      if (typeof max !== "undefined" && num > max) isValid = false;
    }
    return isValid
  }
}
