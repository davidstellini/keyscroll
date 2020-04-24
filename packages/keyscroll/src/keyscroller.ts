import { fromEvent, merge, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { fromMutation$ } from './utils';

class KeyframeScroller {
  private onScrollChangeSubj = new Subject();
  public onScrollChange$ = this.onScrollChangeSubj.asObservable();

  private scrollChangeSubscription: Subscription = new Subscription();
  private initialized = false;

  private throwErrorIfInitialized() {
    if (this.initialized) {
      throw Error(
        'You can not initialize AnimateOnScroll more than once! Call destroy() first.'
      );
    }
  }

  public initializeFrom(fromObsv$: Observable<unknown>) {
    this.throwErrorIfInitialized();

    this.scrollChangeSubscription = fromObsv$
      .pipe(debounceTime(1))
      .subscribe(() => {
        this.onScrollChangeSubj.next(true);
      });
  }

  public initializeFromCallbackFn(callbackFn: any) {
    this.initializeFrom(
      new Observable((observer) => {
        callbackFn((...args: any) => observer.next(args));
      })
    );
  }

  public initializeFromElementStyleUpdates(element: Node) {
    this.throwErrorIfInitialized();

    const obsv$ = fromMutation$(element, {
      attributes: true,
      attributeFilter: ['style'],
      childList: false,
    });

    this.initializeFrom(obsv$);
  }

  public initializeFromDomEvents() {
    this.throwErrorIfInitialized();

    const obsv$ = merge(
      fromEvent(window, 'scroll'),
      fromEvent(window, 'mousewheel'),
      fromEvent(window, 'mouseup'),
      fromEvent(window, 'resize'),
      fromEvent(window, 'keypress'),
      fromEvent(window, 'touchmove'),
      fromEvent(window, 'touchend')
    );

    this.initializeFrom(obsv$);
  }

  destroy() {
    this.scrollChangeSubscription.unsubscribe();

    this.initialized = false;
  }
}

export const keyscroller = new KeyframeScroller();
