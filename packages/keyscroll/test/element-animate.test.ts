import { elementAnimate } from '../src';
import { animationDuration } from '../dist';

const animationStart = 0;
const animationEnd = 1 - animationDuration;
const fakeWindowHeight = 1000;
const fakeElementHeight = 200;
// const fakeElementWidth = 100;

const makeFakeElement = (y: number, height: number) =>
  ({
    getBoundingClientRect: () => ({
      y,
      height,
    }),
  } as HTMLElement);

/** Position: 0 = top, 1 = bottom */
const makeFakeElementWithPosition = (
  position: number,
  elementHeight = fakeElementHeight,
  windowHeight = fakeWindowHeight
) =>
  makeFakeElement(windowHeight * position - elementHeight / 2, elementHeight);

describe('Element Animate', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'innerHeight', {
      writable: true,
      configurable: true,
      value: fakeWindowHeight,
    });
  });

  describe('getAnimationDelay()', () => {
    it('should be in the begining of the animation if it is out of the screen on the bottom', () => {
      const element = makeFakeElementWithPosition(1.25);

      const delay = elementAnimate.getAnimationDelay(element, 0, 1);

      expect(delay).toBe(animationStart);
    });

    it('should be at the end of the animation if it is out of the screen on the top', () => {
      const element = makeFakeElementWithPosition(-0.25);

      const delay = elementAnimate.getAnimationDelay(element, 0, 1);

      expect(delay).toBe(animationEnd);
    });

    it('should be 50% through the animation at 25% top and animationStarts=0, animationEnds=0.5', () => {
      const element = makeFakeElementWithPosition(0.25);
      element.getBoundingClientRect();
      const delay = elementAnimate.getAnimationDelay(element, 0, 0.5);

      expect(delay).toBe(-animationDuration / 2);
    });

    it('should be 50% through the animation at 75% top and animationStarts=0.5, animationEnds=1', () => {
      const element = makeFakeElementWithPosition(0.75);
      element.getBoundingClientRect();

      const delay = elementAnimate.getAnimationDelay(element, 0.5, 1);

      expect(delay).toBe(-animationDuration / 2);
    });
  });
});
