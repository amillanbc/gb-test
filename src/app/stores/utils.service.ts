// ##### IONIC & ANGULAR
import { Injectable, inject, signal } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular/standalone';
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

  // ##### SIGNALS
  activeToast = signal<HTMLIonToastElement | null>(null);

  // ##### INJECTS
  modalCtrl = inject(ModalController);
  toastCtrl = inject(ToastController);

  // ##### METHODS
  public async openModal({
    props,
    mode = 'dialog',
    comp = GbGenericModalComponent,
  }: {
    props?: object;
    mode?: 'dialog' | 'fullscreen' | 'card';
    comp?: any;
  }): Promise<string | null> {
    let id = '';
    const modalObj: any = {
      component: comp || GbGenericModalComponent,
      componentProps: props,
    };
    if (mode === 'dialog') {
      id = 'dialog-modal';
      modalObj.mode = 'ios';
    }
    if (mode === 'card') {
      id = 'card-modal';
      modalObj.initialBreakpoint = 1;
      modalObj.breakpoints = [1];
      modalObj.mode = 'ios';
    }
    modalObj.id = id;
    const modal = await this.modalCtrl.create(modalObj);
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
        formData[field].max,
      ];
      const num = parseFloat(`${val}`);
      if (typeof validator === 'boolean' && val !== validator) return false;
      if (typeof validator === 'string' || min || max) {
        if (!this.validateField(val, validator, min, max, num)) return false;
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
      if (!this.validateString(validator, val)) return false;
    }
    if (typeof val === 'string' && (min || max)) {
      if (!this.validateMinMax(min, max, num)) return false;
    }
    return true;
  }

  private validateString(validator: string, val: string): boolean {
    const regex = new RegExp(validator);
    if (typeof val === 'string' && !regex.test(val)) return false;
    return true;
  }

  private validateMinMax(
    min: number | undefined,
    max: number | undefined,
    num: number
  ): boolean {
    if (isNaN(num)) return false;
    else {
      if (typeof min !== 'undefined' && num < min) return false;
      if (typeof max !== 'undefined' && num > max) return false;
    }
    return true;
  }

  public async openToast({
    text,
    type = 'default',
    header,
    icon,
    duration = 5000,
    position = 'top',
    color = 'blue',
  }: {
    text: string;
    type?: 'default' | 'success' | 'warning' | 'error';
    header?: string;
    icon?: string;
    duration?: number;
    position?: 'top' | 'bottom';
    color?: string;
  }): Promise<void> {
    let icn = icon || '';
    let col = color;
    switch (type) {
      case 'default':
        icn = 'information-circle-outline';
        col = 'blue';
        break;
      case 'error':
        icn = 'close-circle-outline';
        col = 'error';
        break;
      case 'success':
        icn = 'checkmark-circle-outline';
        col = 'success';
        break;
      case 'warning':
        icn = 'warning-outline';
        col = 'warning';
        break;
    }
    const toast = await this.toastCtrl.create({
      message: text,
      duration: duration,
      position: position,
      color: `gb-${col}-25`,
      mode: 'ios',
      cssClass: [`text-gb-${col}-600`, `gb-toast-gb-${col}-500`, 'w500'],
      swipeGesture: 'vertical',
      icon: icn,
      header: header,
      buttons: [
        {
          side: 'end',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    this.activeToast()?.dismiss();
    this.activeToast.update(() => toast);
    await toast.present();
  }
}
