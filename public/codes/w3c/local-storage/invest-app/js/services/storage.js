import { v4 as uuidv4 } from 'uuid';
import { investments } from '../data/seed';

load(investments);

function storageInsert(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }

  localStorage.setItem(`@invest-app:${key}`, value);
}

function storageSelect(key, isJSON = true) {
  let value = localStorage.getItem(`@invest-app:${key}`);

  if (isJSON) {
    value = JSON.parse(value);
  }

  return value;
}

function load(data) {
  if (storageSelect('loaded', false) !== 'ok') {
    storageInsert('investments', data);

    storageInsert('loaded', 'ok');
  }
}

function create(value) {
  const values = storageSelect('investments');

  value = { ...value, id: uuidv4() };

  storageInsert('investments', [...values, value]);

  return value;
}

function read(id) {
  const values = storageSelect('investments');

  if (id) {
    return values.find((value) => value.id === id);
  } else {
    return values;
  }
}

function update(id, value) {
  const values = storageSelect('investments');

  const index = values.findIndex((value) => value.id === id);

  if (index >= 0) {
    value = { id, ...value };

    values[index] = value;

    storageInsert('investments', values);

    return value;
  } else {
    return false;
  }
}

function remove(id) {
  const values = storageSelect('investments');

  const index = values.findIndex((value) => value.id === id);

  if (index >= 0) {
    values.splice(index, 1);
  }

  storageInsert('investments', values);
}

export default { create, read, update, remove };
