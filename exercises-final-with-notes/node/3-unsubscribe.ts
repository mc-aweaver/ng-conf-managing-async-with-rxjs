// `data$` is an observable stream of 10 numbers.
import { data$ } from './fixtures/1-data';

// TODO: Get the subscription and unsubscribe it after 1 second

// Subscribe using callbacks
// store subscription in a variable
const subscription = data$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

// a one second delay
//after one second the subscription will end/be destroyed
//however if there's a complete() call, next() is never called again
//? When is compelete called?
setTimeout(() => {
  //TODO: call unsubscribe in here!
  subscription.unsubscribe();
}, 1000);
