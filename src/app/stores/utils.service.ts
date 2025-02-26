// ##### IONIC & ANGULAR
import { Injectable, inject } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { ToastController } from "@ionic/angular/standalone"
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

// ##### MODELS
import FormObject from '../types/FormObject';

// ##### GB COMPONENTS
import { GbGenericModalComponent } from '../components/global/gb-generic-modal/gb-generic-modal.component';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  constructor() {
    addIcons(icons);
  }

  // ##### INJECTS
  modalCtrl = inject(ModalController);
  toastCtrl = inject(ToastController);

  // ##### METHODS
  public async openModal({
    props,
    fullscreen = false,
    comp = GbGenericModalComponent,
  }: {
    props?: object;
    fullscreen?: boolean;
    comp?: any;
  }): Promise<any> {
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

  validateForm(formData: FormObject): boolean {
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

  public async openToast({
    text,
    header,
    icon,
    duration = 3000,
    position = 'top',
    color = 'blue',
  }: {
    text: string,
    header?: string
    icon: string,
    duration?: number,
    position?: 'top' | 'bottom',
    color?: string,
    textColor?: string,
  }): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: duration,
      position: position,
      color: `gb-${color}-200`,
      mode: "ios",
      cssClass: [`text-gb-${color}-600`, `gb-toast-gb-${color}-500`, 'w500'],
      swipeGesture: "vertical",
      icon: icon,
      header: header,
    });
    await toast.present();
  }
}
