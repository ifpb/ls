import { useEffect, useState } from 'react';

import Food from '../Food';
import FoodForm from '../FoodForm';
import DeleteFood from '../DeleteFood';
import NewFoodBtn from '../NewFoodBtn';
import api from '../../services/api';

import './styles.css';

function Foods() {
  const defaultFood = { name: '', image: '' };
  const [isCreateFood, setIsCreateFood] = useState(true);
  const [selectedFood, setSelectedFood] = useState(defaultFood);
  const [foods, setFoods] = useState([]);

  const onCreateFoodClick = () => {
    setSelectedFood(defaultFood);

    setIsCreateFood(true);
  };

  const onCreateFood = (newFood) => {
    setFoods([...foods, newFood]);

    setIsCreateFood(true);
  };

  const onUpdateFoodClick = (food) => {
    setSelectedFood(food);

    setIsCreateFood(false);
  };

  const onUpdateFood = (newFood) => {
    const newFoods = foods.map((food) =>
      food.id === newFood.id ? newFood : food
    );

    setFoods(newFoods);
  };

  const onDeleteFoodClick = (food) => {
    setSelectedFood(food);
  };

  const onDeleteFood = (foodId) => {
    const newFoods = foods.filter((food) => food.id !== foodId);

    setFoods(newFoods);
  };

  useEffect(() => {
    (async () => {
      setFoods(await api.readAll());
    })();
  }, []);

  return (
    <>
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-right">
        <NewFoodBtn onCreateFoodClick={onCreateFoodClick} />
      </div>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food
            key={food.id}
            food={food}
            onUpdateFoodClick={onUpdateFoodClick}
            onDeleteFoodClick={onDeleteFoodClick}
          />
        ))}
      </section>
      <FoodForm
        isCreateFood={isCreateFood}
        food={selectedFood}
        onCreateFood={onCreateFood}
        onUpdateFood={onUpdateFood}
      />
      <DeleteFood food={selectedFood} onDeleteFood={onDeleteFood} />
    </>
  );
}

export default Foods;
