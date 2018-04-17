import { from } from 'rxjs';

//Remember that promises are async so start, stop will print before 'still useful'
const promise = Promise.resolve('still useful!');

//TODO: create an observable the `data` array with `Observable.from`
const source$ = from(promise);

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
  stop
  still useful!
  done
*/

// Notice the output is _asynchronous_, because promises are an async value
