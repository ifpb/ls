const replace = require('replace-in-file');
const options = {
  files: ['./docs/**/*.html', './docs/_next/static/chunks/**/*.js'],
  from: [
    /src="\/?imgs/g,
    /src:"\/?imgs/g,
    /href="\/imgs/g,
    /href:"\/imgs/g,
    /href="\/codes/g,
    /href:"\/codes/g,
    /src:"\/codes/g,
  ],
  to: [
    'src="/ls/imgs',
    'src:"/ls/imgs',
    'href="/ls/imgs',
    'href:"/ls/imgs',
    'href="/ls/codes',
    'href:"/ls/codes',
    'src:"/ls/codes',
  ],
};
(async function () {
  try {
    const results = await replace(options);
    console.log('Replacement results:', results);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
