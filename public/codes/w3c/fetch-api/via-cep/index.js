async function getCep(cep) {
  const resource = `https://viacep.com.br/ws/${cep}/json/`;

  const res = await fetch(resource);

  return await res.json();
}

const cep = '58015430';

// then
const resource = `https://viacep.com.br/ws/${cep}/json/`;

fetch(resource)
  .then((res) => res.json())
  .then((data) => console.log(data));

// async await
const data = await getCep(cep);

console.log(data);
