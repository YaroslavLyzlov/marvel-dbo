import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.styl']
})
export class LoaderComponent {
  realSize = 48;
  innerSize = 48 / 1.5;

  @Input() set size(size: number) {
    this.realSize = size;
    this.innerSize = size / 1.5;
  }

  get style() {
    const size = `${this.realSize}px`;
    return {
      height: size,
      width: size
    };
  }

  get styleInner() {
    const size = `${this.innerSize}px`;
    return {
      height: size,
      width: size
    };
  }
}
