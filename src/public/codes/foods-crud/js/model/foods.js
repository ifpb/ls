function nextId() {
  const foods = readAll();

  const ids = foods.map((food) => food.id);

  const maxId = Math.max(...ids);

  return maxId + 1;
}

function load(newFoods) {
  localStorage.setItem('foods-app:foods', JSON.stringify(newFoods));
}

function create(food) {
  food = { id: nextId(), ...food };

  const foods = readAll();

  const newFoods = [...foods, food];

  load(newFoods);

  return food;
}

function readAll() {
  return JSON.parse(localStorage.getItem('foods-app:foods'));
}

function read(id) {
  const foods = readAll();

  const food = foods.find((food) => food.id === id);

  return food;
}

function update(id, food) {
  const foods = readAll();

  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    foods[index] = { id, ...food };
  }

  load(foods);

  return food;
}

function destroy(id) {
  const foods = readAll();

  const index = foods.findIndex((food) => food.id === id);

  if (index >= 0) {
    foods.splice(index, 1);
  }

  load(foods);
}

export default { load, create, readAll, read, update, destroy };
