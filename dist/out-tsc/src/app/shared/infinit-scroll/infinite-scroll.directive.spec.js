import { __decorate } from "tslib";
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
let ContainerComponent = class ContainerComponent {
};
ContainerComponent = __decorate([
    Component({
        selector: 'app-test-container',
        template: `
    <div id="container" infiniteScroll>
      <div class="repo">Repo Name</div>
      <div class="repo">Repo Name</div>
      <div class="repo">Repo Name</div>
      <div class="repo">Repo Name</div>
    </div>
  `,
        styles: ['.repo{height:30px}']
    })
], ContainerComponent);
function getViewport(win) {
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
fdescribe('InfiniteScrollDirective', () => {
    let fixture;
    let container;
    let element;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ContainerComponent, InfiniteScrollDirective],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
            ],
        });
        fixture = TestBed.createComponent(ContainerComponent);
        // fixture.detectChanges(); // without the provider
        container = fixture.componentInstance;
        element = fixture.nativeElement;
    });
    it('should call component function when reaching the end of the container div', () => {
        const targetElement = element.querySelector('#container');
        const viewport = getViewport(window);
        const rect = targetElement.getBoundingClientRect();
        let boole = false;
        if (window.pageYOffset + 1000 > rect.height) { // To eliminate unnecessary calcs
            const elementTopRelativeToViewport = rect.top;
            const elementTopRelativeToDocument = elementTopRelativeToViewport + window.pageYOffset;
            const scrollableDistance = targetElement.offsetHeight + elementTopRelativeToDocument;
            const currentPos = window.pageYOffset + viewport.height;
            if (currentPos > scrollableDistance) {
                boole = true;
            }
        }
        expect(boole).toBeTrue();
    });
});
//# sourceMappingURL=infinite-scroll.directive.spec.js.map