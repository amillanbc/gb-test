// ##### IONIC & ANGULAR
import { Component, signal, computed, inject, effect } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENTS
// import {
//   GbInputComponent,
//   GbSelectComponent,
//   GbCheckboxComponent,
//   GbBtnComponent,
// } from 'components-library';
import { GbInputComponent } from 'src/app/components/global/gb-input/gb-input.component';
import { GbBtnComponent } from 'src/app/components/global/gb-btn/gb-btn.component';
import { GbSelectComponent } from 'src/app/components/global/gb-select/gb-select.component';
import { GbCheckboxComponent } from 'src/app/components/global/gb-checkbox/gb-checkbox.component';

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
    GbSelectComponent,
    GbCheckboxComponent,
    Highlight,
  ],
})
export class FormsPage {
  constructor() {
    effect(() => {
      for (const item in this.formData) {
        // UPDATE VALIDATORS
        const arr = this.setValidationRegexArr(item);
        this.formData[item as keyof typeof this.formData].validator.update(
          () => arr
        );

        // UPDATE ERR HINTS
        this.formData[item as keyof typeof this.formData].errHint.update(() => {
          const value =
            this.formData[item as keyof typeof this.formData].value();
          const validator =
            this.formData[item as keyof typeof this.formData].validator;
          return this.returnErrHintString(value, validator());
        });
      }

      this.registrationForm.repass.validator.update(
        () => new RegExp(`^${this.registrationForm.pass.value()}$`)
      );
    });
  }

  // ##### INJECTIONS
  utils = inject(Utils);

  // ##### SIGNALS
  isLoading = signal(false);
  formData = {
    question1: {
      value: signal(''),
      validator: signal([new RegExp('')]),
      errHint: signal(''),
    },
    question2: {
      value: signal(''),
      validator: signal([new RegExp('')]),
      errHint: signal(''),
    },
    question3: {
      value: signal(''),
      validator: signal([new RegExp('')]),
      errHint: signal(''),
    },
    question4: {
      value: signal(''),
      validator: signal([new RegExp('')]),
      errHint: signal(''),
    },
    question5: {
      value: signal(''),
      validator: signal([new RegExp('')]),
      errHint: signal(''),
    },
  };

  registrationForm = {
    user: {
      value: signal(''),
      validator: signal(/^.{3,}$/),
      forceError: {
        force: signal(false),
        msg: signal(''),
      },
    },
    pass: {
      value: signal(''),
      validator: signal([/^.{3,}$/, /[!@#$%^&*()]/]),
    },
    repass: {
      value: signal(''),
      validator: signal(/(?:)/),
    },
    age: {
      value: signal(''),
      min: 0,
      max: 50,
    },
    gender: {
      value: signal(''),
      validator: signal(/^.+$/),
    },
    accept: {
      value: signal(false),
      validator: true,
    },
  };

  // ##### METHODS
  submitQuestions() {
    alert('All questions ok!');
  }

  submitRegistration() {
    this.isLoading.update(() => true);
    setTimeout(() => {
      if (this.registrationForm.user.value() === 'asd') {
        const msg = 'User already taken.';
        this.registrationForm.user.forceError.force.update(() => true);
        this.registrationForm.user.forceError.msg.update(() => msg);
        this.utils.openToast({ type: 'error', text: msg });
      } else {
        this.utils.openToast({
          type: 'success',
          text: 'Registration successful',
        });
      }
      this.isLoading.update(() => false);
    }, 1500);
  }

  cleanForceError() {
    this.registrationForm.user.forceError.force.update(() => false);
    this.registrationForm.user.forceError.msg.update(() => '');
  }

  setValidationRegexArr(inputKey: string) {
    const email = this.utils.cleanStringForRegex(this.email);
    const username = this.utils.cleanStringForRegex(this.username);
    const password = this.utils.cleanStringForRegex(this.password);
    const regexArr = [
      new RegExp(`^(?!.*${email}).*$`),
      new RegExp(`^(?!.*${username}).*$`),
      new RegExp(`^(?!.*${password}).*$`),
      /^[a-zA-Z0-9 ]*$/,
      /^.{3,}$/,
    ];
    for (const [key, value] of Object.entries(this.formData)) {
      if (value.value() && key !== inputKey)
        regexArr.push(new RegExp(`^(?!.*${value.value()}).*$`));
    }
    return regexArr;
  }

  returnErrHintString(inputVal: string, regexArr: RegExp[]) {
    for (let i = 0; i < regexArr.length; i++) {
      const valid = this.utils.validateString(inputVal, [regexArr[i]]);
      if (!valid)
        return this.errMsgList[
          i > this.errMsgList.length - 1 ? this.errMsgList.length - 1 : i
        ];
    }
    return '';
  }

  // ##### COMPUTED
  isFormValid = computed(() => this.utils.validateForm(this.formData));

  isRegisterFormValid = computed(() =>
    this.utils.validateForm(this.registrationForm)
  );

  email = 'test@gmail.com';
  username = 'username123';
  password = 'Password456*';
  errMsgList = [
    'No uses tu nombre de usuario, correo o constraseña.',
    'No uses tu nombre de usuario, correo o constraseña.',
    'No uses tu nombre de usuario, correo o constraseña.',
    'No utilices caracteres especiales.',
    'Debe contener más de 2 caracteres.',
    'Respuesta repetida.',
  ];

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

  regexMessages = [
    'Should be at least 3 characters long.',
    'Should contain special chars !@#$%^&*()',
  ];

  html = `
  <gb-input
    placeholder="User"
    [(value)]="formData.user.value"
    [regex]="formData.user.validator"
    [required]="true"
    icon="person-outline" 
    [forceError]="formData.user.forceError" />

  <gb-input
    placeholder="Password"
    [(value)]="formData.pass.value"
    [regex]="formData.pass.validator"
    icon="lock-closed-outline"
    [required]="true"
    type="password"
    [passwordToggle]="true"
    [regexMessages]="regexMessages" />

  <gb-input
    placeholder="Re Password"
    [(value)]="formData.repass.value"
    [regex]="formData.repass.validator"
    icon="lock-closed-outline"
    [required]="true"
    type="password"
    errHint="Passwords do not match."
    [passwordToggle]="true" />

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
        forceError: {
          force: signal(false),
          msg: signal(''),
        },
      },
      pass: {
        value: signal(''),
        validator: ['^.{3,}$', '[!@#$%^&*()]'],
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

    regexMessages = [
      'Should be at least 3 characters long.',
      'Should contain special chars !@#$%^&*()',
    ];
  }

  `;
}
