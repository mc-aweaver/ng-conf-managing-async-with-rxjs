const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/** TODO:
  1. Take the odd numbers from the list,
  2. Double them (i.e. 1 -> 2, 3 -> 6, etc)
  3. Sum them
*/

//think of filter as a logic-gate

const result = arr.filter(x => {
  console.log(`filter() x % 2 === 1 ${x % 2 === 1} `)
  return  x % 2 === 1;
})
//if the value is odd, send it to map()
.map(x => {
  console.log(`map() x + x ${x + x}`)
  return  x + x;
})
//map() then sends it to reduce()
  .reduce((s, x) =>{
  console.log(`reduce() s + x: ${s + x}`)
  return s + x;
  } , 0);

console.log("result" + result);

/**
  NOTE: expected output
  50
*/
