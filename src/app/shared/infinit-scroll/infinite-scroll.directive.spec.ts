import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { InfiniteScrollDirective } from './infinite-scroll.directive';

@Component({
  selector: 'app-test-container',
  template: `
    <div id="container" infiniteScroll>
      <div class="repo">Repo Name 1</div>
      <div class="repo">Repo Name 2</div>
      <div class="repo">Repo Name 3</div>
      <div class="repo">Repo Name 4</div>
      <div class="repo">Repo Name 5</div>
      <div class="repo">Repo Name 6</div>
      <div class="repo">Repo Name 7</div>
      <div class="repo">Repo Name 8</div>
      <div class="repo">Repo Name 9</div>
      <div class="repo">Repo Name 10</div>
      <div class="repo">Repo Name 11</div>
      <div class="repo">Repo Name 12</div>
      <div class="repo">Repo Name 13</div>
      <div class="repo">Repo Name 14</div>
      <div class="repo">Repo Name 15</div>
      <div class="repo">Repo Name 16</div>
      <div class="repo">Repo Name 17</div>
      <div class="repo">Repo Name 18</div>
      <div class="repo">Repo Name 19</div>
      <div class="repo">Repo Name 20</div>
    </div>
  `,
  styles: ['.repo{height:30px}']
})
class ContainerComponent {

}

function getViewport(win: Window) {
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

describe('InfiniteScrollDirective', () => {
  let fixture: ComponentFixture<ContainerComponent>;
  let container: ContainerComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerComponent, InfiniteScrollDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    });

    fixture = TestBed.createComponent(ContainerComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should CALL component function when scrolling to the end of the container div', () => {
    const targetElement = <HTMLDivElement>element.querySelector('#container');
    const viewport = getViewport(window);
    const rect = targetElement.getBoundingClientRect();

    const scrollEvent = document.createEvent( 'CustomEvent' ); // MUST be 'CustomEvent'
    scrollEvent.initCustomEvent( 'scroll', false, false, null );

    // dispatch scroll
    const expectedLeft = 0;
    const expectedTop = rect.height;

    document.body.style.minHeight = '1000px';
    window.scrollTo( expectedLeft, expectedTop );
    document.body.dispatchEvent( scrollEvent );
    //

    let loadNewDataNow: boolean = false;
    const scrollableDistance = rect.top;
    const currentPos = window.pageYOffset + viewport.height;
    if (currentPos > scrollableDistance) {
      loadNewDataNow = true;
    }

    expect(loadNewDataNow).toBeTrue();
  });
});
