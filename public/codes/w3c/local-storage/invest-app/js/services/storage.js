import { v4 as uuidv4 } from 'uuid';
import { investments } from '../data/seed';

load(investments);

function storageInsert(data) {
  localStorage.setItem('@invest-app:investments', JSON.stringify(data));
}

function storageSelect() {
  return JSON.parse(localStorage.getItem('@invest-app:investments'));
}

function load(data) {
  if (localStorage.getItem('@invest-app:loaded') !== 'ok') {
    storageInsert(data);
    localStorage.setItem('@invest-app:loaded', 'ok');
  }
}

function create(value) {
  const values = storageSelect();

  value = { id: uuidv4(), ...value };

  storageInsert([...values, value]);

  return value;
}

function read(id) {
  const values = storageSelect();

  if (id) {
    return values.find((value) => value.id === id);
  } else {
    return values;
  }
}

function update(id, value) {
  const values = storageSelect();

  const index = values.findIndex((value) => value.id === id);

  if (index >= 0) {
    value = { id, ...value };

    values[index] = value;

    storageInsert(values);

    return value;
  } else {
    return false;
  }
}

function remove(id) {
  const values = storageSelect();

  const index = values.findIndex((value) => value.id === id);

  if (index >= 0) {
    values.splice(index, 1);
  }

  storageInsert(values);
}

export default { create, read, update, remove };
