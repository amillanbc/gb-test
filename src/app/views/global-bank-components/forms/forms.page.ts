import { Component, signal, computed, inject } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import { GbInputComponent } from 'src/app/components/global/gb-input/gb-input.component';
import { GbBtnComponent } from 'src/app/components/global/gb-btn/gb-btn.component';
import { GbCheckboxComponent } from 'src/app/components/global/gb-checkbox/gb-checkbox.component';

// ##### SERVICES
import { Utils } from 'src/app/stores/utils.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonContent,
    GbInputComponent,
    GbBtnComponent,
    GbCheckboxComponent,
  ],
})
export class FormsPage {
  // ##### INJECTIONS
  utils = inject(Utils);

  // ##### SIGNALS
  formData = {
    user: {
      value: signal(''),
      validator: '^.{3,}$',
    },
    pass: {
      value: signal(''),
      validator: '^.{3,}$',
    },
    age: {
      value: signal(''),
      min: 0,
      max: 50,
    },
    accept: {
      value: signal(false),
      validator: true,
    },
  };

  // ##### METHODS
  submitLogin() {
    alert('loging in!!!');
  }

  // ##### COMPUTED
  isFormValid = computed(() => {
    return this.utils.validateForm(this.formData);
  });
}
