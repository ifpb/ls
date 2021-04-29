import { useEffect, useRef } from 'react';
import { Button, CardDeck } from 'react-bootstrap';

import Food from './Food';
import FoodForm from './FoodForm';
import DeleteFoodModal from './DeleteFoodModal';
import api from '../services/api';
import { useFood } from '../contexts/FoodContext';

function App() {
  const buttonEl = useRef(null);

  const { foods, setFoods, handleLoadCreateFoodForm } = useFood();

  useEffect(() => {
    const loadFoods = async () => {
      const data = await api.readAll();

      setFoods([...foods, ...data]);
    };

    loadFoods();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-right">
        <Button
          variant="secondary"
          className="rounded-circle mr-4 font-weight-bold"
          onClick={() => handleLoadCreateFoodForm(buttonEl)}
          ref={buttonEl}
        >
          +
        </Button>
      </div>
      <CardDeck className="my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </CardDeck>
      <FoodForm />
      <DeleteFoodModal />
    </div>
  );
}

export default App;
