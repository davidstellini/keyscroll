import { Observable } from 'rxjs';

export const fromMutation$ = (
  target: Node,
  config: MutationObserverInit
): Observable<MutationRecord[]> => {
  return new Observable((observer) => {
    const mutation = new MutationObserver((mutations) => {
      observer.next(mutations);
    });

    mutation.observe(target, config);

    const unsubscribe = () => {
      mutation.disconnect();
    };

    return unsubscribe;
  });
};

export const cap = (input: number, min: number, max: number) => {
  return Math.min(Math.max(input, min), max);
};
