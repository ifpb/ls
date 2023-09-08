import API from './api.js';

async function create(resource, data) {
  const { data: createdData } = await API.post(resource, data);

  return createdData?.[0];
}

async function read(resource) {
  const { data } = await API.get(resource);

  return data;
}

async function update(resource, data) {
  const { data: updatedData } = await API.patch(resource, data);

  return updatedData?.[0];
}

async function remove(resource) {
  const { error } = await API.delete(resource);

  if (error) {
    throw error;
  } else {
    return true;
  }
}

export default { create, read, update, remove };
