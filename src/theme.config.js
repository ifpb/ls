export default {
  github: 'https://github.com/ifpb/ls', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/ifpb/ls/blob/master', // base URL for the docs repository
  titleSuffix: ' – LS',
  nextLinks: true,
  prevLinks: true,
  floatTOC: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: false,
  footerEditLink: false,
  logo: (
    <>
      <strong>Linguagem de Script</strong>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Linguagem de Script" />
      <meta name="og:title" content="Linguagem de Script" />
    </>
  ),
};
