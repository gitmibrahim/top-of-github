import { __decorate } from "tslib";
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
let InfiniteScrollDirective = class InfiniteScrollDirective {
    constructor(element) {
        this.element = element;
        this.infiniteScrollAction = new EventEmitter();
        this.timeToScroll = this.infiniteScrollAction.asObservable();
        this.el = element.nativeElement;
        this.viewport = this.getViewport(window);
    }
    onScroll() {
        const rect = this.el.getBoundingClientRect();
        if (window.pageYOffset + 1000 > rect.height) { // To eliminate unnecessary calcs
            const elementTopRelativeToViewport = rect.top;
            const elementTopRelativeToDocument = elementTopRelativeToViewport + window.pageYOffset;
            const scrollableDistance = this.el.offsetHeight + elementTopRelativeToDocument;
            const currentPos = window.pageYOffset + this.viewport.height;
            if (currentPos > scrollableDistance) {
                this.infiniteScrollAction.emit(true);
            }
        }
    }
    getViewport(win) {
        // This works for all browsers except IE8 and before
        if (win.innerWidth != null) {
            return {
                width: win.innerWidth,
                height: win.innerHeight
            };
        }
        // For IE (or any browser) in Standards mode
        let d = win.document;
        if (document.compatMode == 'CSS1Compat') {
            return {
                width: d.documentElement.clientWidth,
                height: d.documentElement.clientHeight
            };
        }
        // For browsers in Quirks mode
        return {
            width: d.body.clientWidth,
            height: d.body.clientHeight
        };
    }
};
__decorate([
    Output()
], InfiniteScrollDirective.prototype, "timeToScroll", void 0);
__decorate([
    HostListener('window:scroll')
], InfiniteScrollDirective.prototype, "onScroll", null);
InfiniteScrollDirective = __decorate([
    Directive({
        selector: '[infiniteScroll]',
    })
], InfiniteScrollDirective);
export { InfiniteScrollDirective };
//# sourceMappingURL=infinite-scroll.directive.js.map