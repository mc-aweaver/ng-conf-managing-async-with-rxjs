import { Observable } from 'rxjs';

// TODO: create an observable with the Observable constructor that
// emits the values 1, 2, 3 and completes.

//this is what's going on under the cover of things that use observable
const source$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);

  //always complete your observables
  observer.complete();
});

source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);
