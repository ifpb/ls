function sumPromise(a, b) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) reject('Invalid numbers');
    else setTimeout(() => resolve(a + b), 200);
  });

  return promise;
}

async function result() {
  try {
    let res = await sumPromise(2, 2);
    res = await sumPromise(2, res);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

result().then((res) => console.log());
