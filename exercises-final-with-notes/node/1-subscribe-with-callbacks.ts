// `data$` is an observable stream of 10 numbers.
import { data$ } from './fixtures/1-data';

// TODO: Subscribe to `data$` using three callbacks and log out all values to console.
// be sure to log errors and completions as well.

// Subscribe using callbacks
data$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

/* data$.subscribe(
    onNext
    onError - if not hanndled will be thrown at a specified time,
    onDone)
*/

/*data$.subscribe(
    undefined,
    undefined,
    () => console.log("done")
)*/

//Typical subscription
// data$.subscript(()=> console.log("hi"))