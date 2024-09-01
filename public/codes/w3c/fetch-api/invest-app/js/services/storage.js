const API_TOKEN = import.meta.env.VITE_APP_SUPABASE_KEY;
const API_URL = import.meta.env.VITE_APP_SUPABASE_URL + '/rest/v1';

async function create(resource, data) {
  resource = `${API_URL}/${resource}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
      Prefer: 'return=representation',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };

  const res = await fetch(resource, options);

  const createdData = await res.json();

  return createdData?.[0];
}

async function read(resource) {
  resource = `${API_URL}/${resource}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'GET',
  };

  const res = await fetch(resource, options);

  return await res.json();
}

async function update(resource, id, data) {
  resource = `${API_URL}/${resource}?id=eq.${id}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
      Prefer: 'return=representation',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(data),
  };

  const res = await fetch(resource, options);

  const updatedData = await res.json();

  return updatedData?.[0];
}

async function remove(resource, id) {
  resource = `${API_URL}/${resource}?id=eq.${id}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'DELETE',
  };

  const res = await fetch(resource, options);

  return res.ok;
}

export default { create, read, update, remove };
