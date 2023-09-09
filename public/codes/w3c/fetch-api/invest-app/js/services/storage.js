const API_TOKEN = import.meta.env.VITE_APP_SUPABASE_KEY;
const API_URL = import.meta.env.VITE_APP_SUPABASE_URL + '/rest/v1';

async function create(resource, data) {
  resource = `${API_URL}/${resource}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
      prefer: 'return=representation',
      'Content-Type': 'application/json',
    },
    method: 'post',
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
    method: 'get',
  };

  const res = await fetch(resource, options);

  return await res.json();
}

async function update(resource, data) {
  resource = `${API_URL}/${resource}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
      prefer: 'return=representation',
    },
    method: 'patch',
    body: JSON.stringify(data),
    referrer: location.origin,
    referrerPolicy: 'strict-origin-when-cross-origin',
    mode: 'cors',
    credentials: 'include',
  };

  const res = await fetch(resource, options);

  const updatedData = await res.json();

  return updatedData?.[0];
}

async function remove(resource) {
  resource = `${API_URL}/${resource}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'delete',
  };

  const res = await fetch(resource, options);

  return res.ok;
}

export default { create, read, update, remove };
