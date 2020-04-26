import { cap } from './utils';
import { filter, map } from 'rxjs/operators';
import { keyscroller } from './keyscroller';

export const animationDuration = 100;

class ElementAnimate {
  public getAnimationDelay(
    element: HTMLElement,
    animationStartsFrom: number,
    animationEndsAt: number
  ) {
    const animateFrom = window.innerHeight * animationStartsFrom;
    const animateTo = window.innerHeight * animationEndsAt;
    const elementPosition =
      element.getBoundingClientRect().y +
      element.getBoundingClientRect().height / 2;
    const progress =
      (elementPosition - animateFrom) / (animateTo - animateFrom);

    const windowPercentage = progress;

    const cappedPercentage = cap(windowPercentage, 0, 1);
    const reversed = 1 - cappedPercentage;

    return +(cap(reversed * -1, -1, 0) * animationDuration).toFixed(2);
  }

  private initializeAnimation(
    element: HTMLElement,
    keyframeName: string,
    animationTiming: string,
    direction: 'normal' | 'reverse'
  ) {
    element.style.animation =
      `${keyframeName} 100s ${animationTiming} paused infinite ${direction}`;
    element.style.animationIterationCount = "1";
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
      animationStart: 0,
      animationEnd: 1,
    }
  ) {
    const direction =
      config.animationStart < config.animationEnd ? 'normal' : 'reverse';

    this.initializeAnimation(
      element,
      keyframeName,
      config.animationTiming,
      direction
    );

    return keyscroller.onScrollChange$
      .pipe(
        // takeUntil(keyscroller.destroy$),
        map(() =>
          this.getAnimationDelay(
            element,
            config.animationStart,
            config.animationEnd
          )
        ),
        // Filter out events off screen
        filter((delay) => delay >= -animationDuration && delay <= 0)
      )
      .subscribe((delay) => this.updateElementDelay(element, delay));
  }
}

export const elementAnimate = new ElementAnimate();
