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
        <div class="card-food col-sm-6 col-lg-4 col-xl-3 mb-3" id="food-${food.id}">
          <div class="card">
            <div class="card-header text-center font-weight-bold">
              <span class="food-name">
                ${food.name}
              </span>
            </div>
            <div class="card-body p-0">
              <img src="${food.image}" alt="${food.name}" class="food-image w-100">
            </div>
          </div>
        </div>
      `;

  const foodsDeck = document.querySelector('.card-deck');

  foodsDeck.insertAdjacentHTML('beforeend', foodsView);
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

window.loadFormCreateFood = loadFormCreateFood;

loadFoods();
