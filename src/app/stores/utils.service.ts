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
    const modal = await this.modalCtrl.create({
      component: comp || GbGenericModalComponent,
      id: fullscreen ? '' : 'dialog-modal',
      componentProps: props,
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) return data.action;
    return null;
  }

  validateForm(formData: FormObject) {
    for (let field in formData) {
      const [val, validator, min, max] = [
        formData[field].value(),
        formData[field].validator,
        formData[field].min,
        formData[field].max
      ]
      const num = parseFloat(`${val}`);
      if (typeof validator === 'boolean' && val !== validator) return false;
      if (typeof validator === 'string' || min || max) {
        if (!this.validateField(val, validator, min, max, num)) return false
      }
    }
    return true;
  }

  validateField(
    val: string | boolean,
    validator: string | boolean | undefined,
    min: number | undefined,
    max: number | undefined,
    num: number
  ): boolean {
    if (typeof val === 'string' && typeof validator === 'string') {
      if (!this.validateString(validator, val)) return false
   }
   if (typeof val === 'string' && (min || max)) {
     if (!this.validateMinMax(min, max, num)) return false
   }
   return true
  }

  private validateString(validator: string, val: string): boolean {
    const regex = new RegExp(validator);
    if (typeof val === 'string' && !regex.test(val)) return false
    return true
  }

  private validateMinMax(min: number | undefined, max: number | undefined, num: number): boolean {
    if (isNaN(num)) return false
    else {
      if (typeof min !== "undefined" && num < min) return false
      if (typeof max !== "undefined" && num > max) return false
    }
    return true
  }
}
