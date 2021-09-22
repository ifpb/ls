function sumPromise(a, b) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) reject('Invalid numbers');
    else setTimeout(() => resolve(a + b), 200);
  });

  return promise;
}

async function sumAsync(a, b) {
  const sleep = (m) => new Promise((r) => setTimeout(r, m));

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers');
  } else {
    await sleep(200);
    return a + b;
  }
}

async function result() {
  try {
    const res = await sumPromise(2, 2);
    return await sumAsync('a', res);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(err);
    }
  }
}

result().then((res) => console.log(res));
