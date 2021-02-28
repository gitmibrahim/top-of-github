import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './infinit-scroll/infinite-scroll.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [InfiniteScrollDirective],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    InfiniteScrollDirective,
  ]
})
export class SharedModule { }
