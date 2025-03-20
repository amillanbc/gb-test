import { WritableSignal } from '@angular/core';

interface FieldObject {
  value: WritableSignal<string | boolean>;
  validator?: WritableSignal<RegExp | RegExp[]> | boolean;
  min?: number;
  max?: number;
}

interface FormObject {
  [key: string]: FieldObject;
}

export default FormObject;
