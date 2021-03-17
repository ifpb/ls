function sumPromise(a, b) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) reject('Invalid numbers');
    else setTimeout(() => resolve(a + b), 200);
  });

  return promise;
}

sumPromise(2, 2)
  .then((res) => sumPromise(res, 2))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
