// `data$` is an observable stream of 10 numbers.
import { data$ } from './fixtures/1-data';

// TODO: Subscribe to `data$` and log out all values to console.

// Subscribe using forEach
const promise = data$.forEach(x => console.log(x));

promise.then(
  () => console.log('done'),
  (err) => {
    // An error happened in either the observable
    // OR an error in the next handler!!!
    console.error(err)
  }
)

// NOTE: If `forEach` returns a promise, how an we unsubscribe?
//   We can't (yet! perhaps in the future of Rx?)
// Subscriptions aren't returned for promises

//foreach always resolves to a promises, in doing so, it provides a roundabout way to handle errors (how?)