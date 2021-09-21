import { useEffect, useRef } from 'react';
import { Button, CardDeck } from 'react-bootstrap';

import Food from './Food';
import FoodForm from './FoodForm';
import api from '../services/api';
import { useFood } from '../contexts/FoodContext';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const buttonEl = useRef(null);

  const { foods, setFoods, toggleFoodForm } = useFood();

  const handleClick = (event) => {
    toggleFoodForm();

    event.currentTarget.blur();
  };

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
          onClick={handleClick}
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
    </div>
  );
}

export default App;
