import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'gb-progress-bar',
  templateUrl: './gb-progress-bar.component.html',
  styleUrls: ['./gb-progress-bar.component.scss'],
})
export class GbProgressBarComponent {
  // ##### INPTUS
  progress = input(0)
  color = input('blue')
  level = input(500)

  // ##### COMPUTED
  classes = computed(() => {
    const color = this.color()
    const level = this.level()
    let p = this.progress()
    if (p >= 100) p = 100
    if (p <= 0) p = 0
    let classes = `bg-gb-${color}-${level} absolute top-0 left-0 h-full gb-w-${p} rounded-2xl`
    return classes
  })
}
