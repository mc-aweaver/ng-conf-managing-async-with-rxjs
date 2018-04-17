// `data$` is an observable stream of 10 numbers.
import { data$ } from './fixtures/1-data';

// TODO: create an observer to subscribe to `data$` and log out all values.
const observer = {
  next(x) { console.log(x) },
  error(err) { console.error(err) },
  complete() { console.info('done'); }
};

// Subscribe using observer
data$.subscribe(observer);

//when only handling complete, be explicit, makes it easier to read
data$.subscribe({
  complete() { /* whatever */}
})
//instead of
data$.subscribe(
  null, null, () => { /* whatever */}
);