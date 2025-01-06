import { Component, OnInit } from '@angular/core';

import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  imports: [IonRouterOutlet],
})
export class BaseLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
