const server = 'https://foods-json-server.lucachaves.repl.co';

const create = async (food) => {
  const res = await fetch(`${server}/foods`, {
    method: 'post',
    body: JSON.stringify(food),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
};

const readAll = async () => {
  const res = await fetch(`${server}/foods`);

  return await res.json();
};

const read = async (id) => {
  const res = await fetch(`${server}/foods/${id}`);

  return await res.json();
};

const readByName = async (name) => {
  const res = await fetch(`${server}/foods?name=${name}`);

  return await res.json();
};

const update = async (id, food) => {
  const res = await fetch(`${server}/foods/${id}`, {
    method: 'put',
    body: JSON.stringify(food),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
};

const remove = async (id) => {
  await fetch(`${server}/foods/${id}`, {
    method: 'delete',
  });
};

const api = { create, readAll, read, readByName, update, remove };

export default api;
