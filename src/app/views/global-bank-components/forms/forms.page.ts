// ##### IONIC & ANGULAR
import { Component, signal, computed, inject, effect } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
import {
  GbInputComponent,
  GbBtnComponent,
  GbCheckboxComponent,
  GbSelectComponent,
} from 'components-library';

// ##### SERVICES
import { Utils } from 'src/app/stores/utils.service';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

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
    GbSelectComponent,
    Highlight,
  ],
})
export class FormsPage {
  constructor() {
    effect(() => {
      this.formData.repass.validator = `^${this.formData.pass.value()}$`;
    });
  }

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
    repass: {
      value: signal(''),
      validator: '',
    },
    age: {
      value: signal(''),
      min: 0,
      max: 50,
    },
    gender: {
      value: signal(''),
      validator: '^.+$',
    },
    accept: {
      value: signal(false),
      validator: true,
    },
  };

  // ##### METHODS
  submitLogin() {
    alert('Registration successfull');
  }

  // ##### COMPUTED
  isFormValid = computed(() => this.utils.validateForm(this.formData));

  options = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  html = `
  <gb-input
    placeholder="User"
    [(value)]="formData.user.value"
    [regex]="formData.user.validator"
    [required]="true"
    icon="person-outline" />

  <gb-input
    placeholder="Password"
    [(value)]="formData.pass.value"
    [regex]="formData.pass.validator"
    icon="lock-closed-outline"
    [required]="true"
    type="password" />

  <gb-input
    placeholder="Age"
    [(value)]="formData.age.value"
    type="number"
    [required]="true"
    [min]="formData.age.min"
    [max]="formData.age.max" />

  <gb-select
    placeholder="Select gender"
    [(value)]="formData.gender.value"
    [options]="options"
    [required]="true" />

  <gb-checkbox
    name="checkbox_1"
    [(value)]="formData.accept.value"
    label="Accept terms" />

  <gb-btn
    label="Register"
    (click)="submitLogin()"
    [disabled]="!isFormValid()" />`;

  ts = `
  // ##### IONIC & ANGULAR
  import { signal, computed, inject } from '@angular/core';

  // ##### SERVICES
  import { Utils } from 'src/app/stores/utils.service';

  export class FormsPage {
    // ##### CONSTRUCTOR
    constructor() {
      effect(() => {
        this.formData.repass.validator = \`^\${this.formData.pass.value()}$\`;
      });
    }
    
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
      repass: {
        value: signal(''),
        validator: '',
      },
      age: {
        value: signal(''),
        min: 0,
        max: 50,
      },
      gender: {
        value: signal(''),
        validator: '^.+$',
      },
      accept: {
        value: signal(false),
        validator: true,
      },
    };
    
    // ##### METHODS
    submitLogin() {
      // your code here
    }
      
    // ##### COMPUTED
    isFormValid = computed(() => this.utils.validateForm(this.formData));

    // ##### OPTIONS
    options = [
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Female',
        value: 'female',
      },
    ];
  }

  `;
}
