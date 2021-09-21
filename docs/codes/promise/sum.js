function sum(a, b) {
  return a + b;
}

function sumPromise(a, b) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) reject('Invalid numbers');
    else setTimeout(() => resolve(a + b), 200);
  });

  return promise;
}

console.log(sum(1, 1));
console.log(sumPromise(2, 2));
sumPromise(2, 2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log(sum(3, 3));

//=>
// 2
// Promise { <pending> }
// 6
// 4
