import { v4 as uuidv4 } from 'uuid';

function storageInsert(key, data) {
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }

  localStorage.setItem(`@invest-app:${key}`, data);
}

function storageSelect(key, isJSON = true) {
  let data = localStorage.getItem(`@invest-app:${key}`);

  if (isJSON) {
    data = JSON.parse(data);
  }

  return data;
}

function load(resource, dataset) {
  if (storageSelect('loaded', false) !== 'ok') {
    storageInsert(resource, dataset);

    storageInsert('loaded', 'ok');
  }
}

function create(resource, data) {
  const dataset = storageSelect(resource);

  data = { ...data, id: uuidv4() };

  storageInsert(resource, [...dataset, data]);

  return data;
}

function read(resource, id) {
  const dataset = storageSelect(resource);

  if (id) {
    return dataset.find((data) => data.id === id);
  } else {
    return dataset;
  }
}

function update(resource, id, data) {
  const dataset = storageSelect(resource);

  const index = dataset.findIndex((data) => data.id === id);

  if (index >= 0) {
    data = { id, ...data };

    dataset[index] = { ...dataset[index], ...data };

    storageInsert(resource, dataset);

    return data;
  } else {
    return false;
  }
}

function remove(resource, id) {
  const dataset = storageSelect(resource);

  const index = dataset.findIndex((data) => data.id === id);

  if (index >= 0) {
    dataset.splice(index, 1);
  }

  storageInsert(resource, dataset);
}

export default { load, create, read, update, remove };
