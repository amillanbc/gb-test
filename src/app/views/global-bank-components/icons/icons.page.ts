import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/angular/standalone';
import { GbIconsComponent } from "../../../components/global/gb-icons/gb-icons.component";
// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.page.html',
  styleUrls: ['./icons.page.scss'],
  standalone: true,
  imports: [Highlight, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, GbIconsComponent]
})
export class IconsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  primary = '<app-gb-icons name="airplane-outline" isCustomIcons="false"></app-gb-icons>';
  primary2 = '<app-gb-icons ios="heart-outline" md="heart-sharp"></app-gb-icons>'
  custom1 = '<app-gb-icons name="heart" color="error" level="500" size="2rem" isCustomIcons="true"></app-gb-icons>';
  custom2 = '<app-gb-icons name="heart" size="4rem" color="blue" level="600" isCustomIcons="true">';
  custom3 = '<app-gb-icons name="genetic-data-svgrepo-com" color="warning" level="600" size="40px" isCustomIcons="true"></app-gb-icons>';
  custom4 = '<app-gb-icons name="heart" isCustomIcons="true"></app-gb-icons>'
}
