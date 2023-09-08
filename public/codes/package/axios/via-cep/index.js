import axios from 'axios';

const cep = '58015430';

const resource = `https://viacep.com.br/ws/${cep}/json/`;

axios.get(resource).then((response) => console.log(response.data));
