import { NgModule } from '@angular/core';
import { InfiniteScrollDirective } from './infinit-scroll/infinite-scroll.directive';

@NgModule({
  declarations: [InfiniteScrollDirective],
  exports: [
    InfiniteScrollDirective
  ]
})
export class SharedModule { }
