import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStore {
  public clientName = signal('Pedro');
  readonly passRegex = /^[A-Za-z0-9]{6}$/;
  readonly emailRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
}
