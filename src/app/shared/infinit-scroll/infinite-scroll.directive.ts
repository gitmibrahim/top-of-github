import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

export interface Viewport {
  width: number;
  height: number;
}

@Directive({
  selector: '[infiniteScroll]',
})
export class InfiniteScrollDirective {

  constructor() {}

}
