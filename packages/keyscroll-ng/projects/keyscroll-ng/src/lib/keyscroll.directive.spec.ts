import { KeyscrollDirective } from './keyscroll.directive';

describe('KeyscrollDirective', () => {
  it('should create an instance', () => {
    const directive = new KeyscrollDirective(
      { nativeElement: {} },
      { attachAnimation: () => ({} as any) }
    );
    expect(directive).toBeTruthy();
  });
});
