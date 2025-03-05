// ##### IONIC & ANGULAR
import { Component, OnInit, signal } from '@angular/core';
import { IonContent, IonRow, IonCol } from '@ionic/angular/standalone';

// ##### GB COMPONENT
import { GbProgressBarComponent } from 'src/app/components/global/gb-progress-bar/gb-progress-bar.component';

// ##### OTHER IMPORTS
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonContent, GbProgressBarComponent, Highlight]
})
export class ProgressBarPage implements OnInit {
  // ##### SIGNALS
  progress = signal(0)

  // METHODS
  loopCount() {
    let count = 0;
    setInterval(() => {
      this.progress.update(val => val = count)
      count = (count + 1) % 101;
    }, 25);
  }

  // LC HOOKS
  ngOnInit() {
    this.loopCount()
  }

  default = `<gb-progress-bar [progress]="100" />`

  color = `<gb-progress-bar [progress]="75" color="pink" />`

  level = `<gb-progress-bar [progress]="50" color="green" [level]="300" />`

}
