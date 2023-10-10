export function formatCurrency(currency) {
  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatDate(value, pattern) {
  value = value.seconds ? value.seconds * 1000 : value;

  const date = new Date(value).toLocaleDateString('pt-br');

  if (pattern === 'ymd') {
    return date.split('/').reverse().join('-');
  } else {
    return date;
  }
}
