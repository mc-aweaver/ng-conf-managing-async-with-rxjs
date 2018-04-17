import { of } from 'rxjs';

//TODO: create an observable of 'foo', 'bar' and 'baz' with `Observable.of`


const source$ = of('foo', 'bar', 'baz');
//can use Observable.of explicitly, but it's being replaced in favor of just 'of'

//can make this asynchronouse by adding a scheduler, don't for get to import asapScheduler
//const source$ = of('foo', 'bar', 'baz', asapScheduler);
//will print start, stop, then the other values

console.log('start');
source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);
console.log('stop');

/**
  NOTE: expected output
  start
  foo
  bar
  baz
  done
  stop
*/

// Notice the output is _synchronous_!!
