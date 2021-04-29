import { useEffect, useState } from 'react';
import { CardDeck } from 'react-bootstrap';

import Food from './Food';
import FoodForm from './FoodForm';
import DeleteFood from './DeleteFood';
import NewFoodBtn from './NewFoodBtn';
import api from '../services/api';

function Foods() {
  const [selectedFood, setSelectedFood] = useState({ name: '', image: '' });
  const [foods, setFoods] = useState([]);
  const [isCreateFood, setIsCreateFood] = useState(true);
  const [showFoodForm, setShowFoodForm] = useState(false);
  const [showDeleteFood, setShowDeleteFood] = useState(false);

  const onCreateFoodClick = (event) => {
    setSelectedFood({ name: '', image: '' });

    setIsCreateFood(true);

    setShowFoodForm(true);

    event.currentTarget.blur();
  };

  const onCreateFood = async (food) => {
    const newFood = await api.create(food);

    setFoods([...foods, newFood]);

    setShowFoodForm(false);
  };

  const onUpdateFoodClick = (food) => {
    setSelectedFood(food);

    setIsCreateFood(false);

    setShowFoodForm(true);
  };

  const onUpdateFood = async (food) => {
    const newFood = await api.update(food.id, food);

    const newFoods = foods.map((food) =>
      food.id === newFood.id ? newFood : food
    );

    setFoods(newFoods);

    setShowFoodForm(false);
  };

  const onDeleteFoodClick = (food) => {
    setSelectedFood(food);

    setShowDeleteFood(true);
  };

  const onDeleteFood = async (food) => {
    await api.remove(food.id);

    const newFoods = foods.filter((foodItem) => foodItem.id !== food.id);

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
      <CardDeck className="my-3">
        {foods.map((food) => (
          <Food
            key={food.id}
            food={food}
            onUpdateFoodClick={onUpdateFoodClick}
            onDeleteFoodClick={onDeleteFoodClick}
          />
        ))}
      </CardDeck>
      <FoodForm
        food={selectedFood}
        isCreateFood={isCreateFood}
        onCreateFood={onCreateFood}
        onUpdateFood={onUpdateFood}
        setShowFoodForm={setShowFoodForm}
        showFoodForm={showFoodForm}
      />
      <DeleteFood
        food={selectedFood}
        onDeleteFood={onDeleteFood}
        setShowDeleteFood={setShowDeleteFood}
        showDeleteFood={showDeleteFood}
      />
    </>
  );
}

export default Foods;
