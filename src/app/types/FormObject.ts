import { WritableSignal } from '@angular/core';

interface FieldObject {
  value: WritableSignal<string | boolean>;
  validator?: string | string[] | boolean;
  min?: number;
  max?: number;
}

interface FormObject {
  [key: string]: FieldObject;
}

export default FormObject;
