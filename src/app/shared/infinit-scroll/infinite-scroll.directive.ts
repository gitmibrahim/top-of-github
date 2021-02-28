import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { RepositoriesStateService } from 'src/app/modules/repositories/state/repositories.state.service';

export interface Viewport {
  width: number;
  height: number;
}

@Directive({
  selector: '[infiniteScroll]',
})
export class InfiniteScrollDirective {
  private el: any;
  private viewport: Viewport;
  isUpdating: boolean = false;

  private debouncedScroll: Subject<boolean> = new Subject();
  private infiniteScrollAction: EventEmitter<any> = new EventEmitter();
  @Output() timeToScroll: Observable<boolean> = this.infiniteScrollAction.asObservable();

  private scrollSubscriptions: Subscription[] = [];

  constructor(private element: ElementRef, private repoState: RepositoriesStateService) {
    this.el = element.nativeElement;
    this.viewport = this.getViewport(window);
    this.scrollSubscriptions.push(
      repoState.isUpdating$()
      .subscribe((updating: boolean) => this.isUpdating = updating)
    );
  }

  ngOnInit() {
    this.scrollSubscriptions.push(
      this.debouncedScroll
      .pipe(debounceTime(500))
      .subscribe((e: true) => this.infiniteScrollAction.emit(e))
    );
  }

  @HostListener('window:scroll')
  onScroll() {
    const rect = this.el.getBoundingClientRect();
    if (window.pageYOffset + 1000 > rect.height && !this.isUpdating) { // To eliminate unnecessary calcs
      const elementTopRelativeToViewport = rect.top;
      const elementTopRelativeToDocument = elementTopRelativeToViewport + window.pageYOffset;
      const scrollableDistance = this.el.offsetHeight + elementTopRelativeToDocument;
      const currentPos = window.pageYOffset + this.viewport.height;

      if (currentPos > scrollableDistance) {
        this.debouncedScroll.next(true);
      }
    }
  }

  private getViewport(win: Window): Viewport {
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

  ngOnDestroy() {
    this.scrollSubscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
