const API_TOKEN = import.meta.env.VITE_APP_SUPABASE_KEY;
const API_URL = import.meta.env.VITE_APP_SUPABASE_URL;

async function create(resource, data) {
  resource = `${API_URL}/${resource}`;

  const options = {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
      Prefer: 'return=representation',
    },
  };

  const res = await fetch(resource, options);

  return await res.json();
}

async function read(resource) {
  resource = `${API_URL}/${resource}`;

  const options = {
    method: 'get',
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const res = await fetch(resource, options);

  return await res.json();
}

async function update(resource, data) {
  resource = `${API_URL}/${resource}`;

  const options = {
    method: 'patch',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
      Prefer: 'return=representation',
    },
  };

  const res = await fetch(resource, options);

  return await res.json();
}

async function remove(resource) {
  resource = `${API_URL}/${resource}`;

  const options = {
    method: 'delete',
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const res = await fetch(resource, options);

  return res.ok;
}

export default { create, read, update, remove };
