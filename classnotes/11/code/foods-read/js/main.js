async function loadFoods() {
  const response = await fetch('js/model/dataset.json');

  const foods = await response.json();

  for (const food of foods) {
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

loadFoods();
