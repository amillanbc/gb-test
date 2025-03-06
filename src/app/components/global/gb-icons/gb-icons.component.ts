import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, computed, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone'
import * as all from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-gb-icons',
  templateUrl: './gb-icons.component.html',
  styleUrls: ['./gb-icons.component.scss'],
  imports: [IonIcon]
})
export class GbIconsComponent implements AfterViewInit{
  private http = inject(HttpClient);
  name = input<string>('');
  color = input<string>('');
  size = input<string>('1rem');
  level = input(500);
  isCustomIcons = input('false');
  ios = input<string>('');
  md = input<string>('');
  path = input<string[]>();
  nameIcon:string =`assets/icon/${this.name()}.svg`;
  
  // ##### COMPUTED
    classes = computed(() => {
      const c = this.color();
      const l = this.level();
      const sizes = this.size();
      let classes =`text-gb-${c}-${l}`;
      return classes;
    });
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.nameIcon =`assets/icon/${this.name()}.svg`;
    const names = `${this.name()}.svg`;
    if (this.isCustomIcons() == 'true') {
      addIcons({names});
    }
    else {
      addIcons(all);
    }


  }

}
