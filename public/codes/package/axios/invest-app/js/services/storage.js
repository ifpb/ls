import API from './api.js';

async function create(resource, data) {
  const { data: createdData } = await API.post(resource, data);

  return createdData?.[0];
}

async function read(resource, id) {
  if (id) {
    resource = `${resource}?id=eq.${id}`;
  }

  const { data } = await API.get(resource);

  return data;
}

async function update(resource, id, data) {
  resource = `${resource}?id=eq.${id}`;

  const { data: updatedData } = await API.patch(resource, data);

  return updatedData?.[0];
}

async function remove(resource, id) {
  resource = `${resource}?id=eq.${id}`;

  const { error } = await API.delete(resource);

  if (error) {
    throw error;
  } else {
    return true;
  }
}

export default { create, read, update, remove };
