import dataset from './model/dataset.js';
import foods from './model/foods.js';

function loadFoods() {
  if (localStorage.getItem('foods-app:loaded') !== 'ok') {
    foods.load(dataset);
    localStorage.setItem('foods-app:loaded', 'ok');
  }

  for (const food of foods.readAll()) {
    createFoodView(food);
  }
}

function createFoodView(food) {
  const foodsView = `
        <div class="card-food col-sm-6 col-lg-4 col-xl-3 mb-3" id="food-${
          food.id
        }">
          <div class="card">
            <div class="card-header text-center font-weight-bold">
              <span class="food-name">
                ${food.name}
              </span>
              <span class="food-actions float-right">
                ${createFoodActions(food)}
              </span>
            </div>
            <div class="card-body p-0">
              <img src="${food.image}" alt="${
    food.name
  }" class="food-image w-100">
            </div>
          </div>
        </div>
      `;

  const foodsDeck = document.querySelector('.card-deck');

  foodsDeck.insertAdjacentHTML('beforeend', foodsView);
}

function createFoodActions(food) {
  return `
        <i
          class="far fa-trash-alt"
          onclick="loadFormDeleteFood(${food.id}, '${food.name}')"
          data-toggle="modal"
          data-target="#deleteFoodModal">
        </i>
        <i
          class="fas fa-pencil-alt"
          onclick="loadFormUpdateFood(${food.id}, '${food.name}', '${food.image}')"
          data-toggle="modal"
          data-target="#formFoodModal">
        </i>
      `;
}

function loadFormValues(title, foodName, foodImage) {
  const formLabel = document.querySelector('#formFoodLabel');
  const foodNameInput = document.querySelector('#food-name');
  const foodImageInput = document.querySelector('#food-image');

  formLabel.innerHTML = title;
  foodNameInput.value = foodName;
  foodImageInput.value = foodImage;
}

function loadFormCreateFood() {
  const formFood = document.querySelector('#formFood');

  loadFormValues('Nova Comida', '', '');

  formFood.onsubmit = (e) => {
    e.preventDefault();

    let food = Object.fromEntries(new FormData(formFood));

    const newFood = foods.create(food);

    createFoodView(newFood);

    $('#formFoodModal').modal('toggle');

    document.querySelector('#newBtnFood').blur();
  };
}

function loadFormUpdateFood(id, name, image) {
  const formFood = document.querySelector('#formFood');

  loadFormValues('Atualizar Comida', name, image);

  formFood.onsubmit = (e) => {
    e.preventDefault();

    const food = Object.fromEntries(new FormData(formFood));

    foods.update(id, food);

    updateFoodView({ id, ...food });

    $('#formFoodModal').modal('toggle');
  };
}

function updateFoodView(food) {
  const foodName = document.querySelector(`#food-${food.id} .food-name`);
  const foodImage = document.querySelector(`#food-${food.id} .food-image`);
  const foodActions = document.querySelector(`#food-${food.id} .food-actions`);

  foodName.innerText = food.name;
  foodImage.src = food.image;
  foodActions.innerHTML = createFoodActions(food);
}

function loadFormDeleteFood(foodId, foodName) {
  document.querySelector('#modal-name-food').innerHTML = foodName;

  document.querySelector('#deleteFoodBtn').onclick = (e) => {
    e.preventDefault();

    foods.destroy(foodId);

    document.querySelector(`#food-${foodId}`).remove();

    $('#deleteFoodModal').modal('toggle');
  };
}

window.loadFormCreateFood = loadFormCreateFood;
window.loadFormUpdateFood = loadFormUpdateFood;
window.loadFormDeleteFood = loadFormDeleteFood;

loadFoods();
