import { v4 as uuidv4 } from 'uuid';

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

function load(resourse, data) {
  if (storageSelect('loaded', false) !== 'ok') {
    storageInsert(resourse, data);

    storageInsert('loaded', 'ok');
  }
}

function create(resourse, value) {
  const values = storageSelect(resourse);

  value = { ...value, id: uuidv4() };

  storageInsert(resourse, [...values, value]);

  return value;
}

function read(resourse, id) {
  const values = storageSelect(resourse);

  if (id) {
    return values.find((value) => value.id === id);
  } else {
    return values;
  }
}

function update(resourse, id, value) {
  const values = storageSelect(resourse);

  const index = values.findIndex((value) => value.id === id);

  if (index >= 0) {
    value = { id, ...value };

    values[index] = { ...values[index], ...value };

    storageInsert(resourse, values);

    return value;
  } else {
    return false;
  }
}

function remove(resourse, id) {
  const values = storageSelect(resourse);

  const index = values.findIndex((value) => value.id === id);

  if (index >= 0) {
    values.splice(index, 1);
  }

  storageInsert(resourse, values);
}

export default { load, create, read, update, remove };
