import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from './infinit-scroll/infinite-scroll.directive';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [InfiniteScrollDirective],
        imports: [
            CommonModule,
        ],
        exports: [
            InfiniteScrollDirective
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map