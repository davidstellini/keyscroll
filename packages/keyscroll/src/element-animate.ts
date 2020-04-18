import { cap } from './utils';
import { filter, map } from 'rxjs/operators';
import { keyscroller } from './keyscroller';

class ElementAnimate {
  private getAnimationDelay(
    element: HTMLElement,
    animationStartsFrom: number,
    animationEndsAt: number
  ) {
    const windowHeight = window.innerHeight * animationEndsAt;
    const elementOriginalTop =
      element.getBoundingClientRect().y +
      element.getBoundingClientRect().height / 2;
    const elementTop =
      elementOriginalTop + elementOriginalTop * animationStartsFrom;

    const windowPercentage = elementTop / windowHeight;

    const cappedPercentage = cap(windowPercentage, 0, 0.999);
    const reversed = 1 - cappedPercentage;

    return cap(reversed * -1, -0.99, 0);
  }

  private initializeAnimation(
    element: HTMLElement,
    keyframeName: string,
    animationTiming: string
  ) {
    element.style.animation =
      keyframeName + ` 100s ${animationTiming} paused infinite`;
  }

  private updateElementDelay(element: HTMLElement, delay: number) {
    element.style.animationDelay = delay + 's';
  }

  // todo: Animation will only be attached once
  public attachAnimation(
    element: HTMLElement,
    keyframeName: string,
    config = {
      animationTiming: 'linear',
      animationStartsFrom: 0,
      animationEndsAt: 1,
    }
  ) {
    this.initializeAnimation(element, keyframeName, config.animationTiming);

    return keyscroller.onScrollChange$
      .pipe(
        // takeUntil(keyscroller.destroy$),
        map(
          () =>
            this.getAnimationDelay(
              element,
              config.animationStartsFrom,
              config.animationEndsAt
            ) * 100
        ),
        // Filter out events off screen
        filter((delay) => delay >= -100 && delay <= 0)
      )
      .subscribe((delay) => this.updateElementDelay(element, delay));
  }
}

export const elementAnimate = new ElementAnimate();
