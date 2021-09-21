import { createContext, useState, useContext } from 'react';

import api from '../services/api';

export const FoodContext = createContext({});

export function FoodContextProvider({ children }) {
  const emptyFood = { name: '', image: '' };

  const [foods, setFoods] = useState([]);
  const [isShowFoodForm, setIsShowFoodForm] = useState(false);
  const [isShowDeleteFoodModal, setIsShowDeleteFoodModal] = useState(false);
  const [typeFoodForm, setTypeFoodForm] = useState('create');
  const [selectedFood, setSelectedFood] = useState(emptyFood);

  const toggleFoodForm = () => {
    setIsShowFoodForm(!isShowFoodForm);
  };
  const toggleDeleteFoodModal = () => {
    setIsShowDeleteFoodModal(!isShowDeleteFoodModal);
  };

  const handleLoadCreateFoodForm = (buttonEl) => {
    setSelectedFood(emptyFood);

    toggleFoodForm();

    setTypeFoodForm('create');

    buttonEl.current.blur();
  };

  const handleCreateFood = async (food) => {
    const newFood = await api.create(food);

    setFoods([...foods, newFood]);
  };

  const handleLoadUpdateFoodForm = (food) => {
    setSelectedFood(food);

    toggleFoodForm();

    setTypeFoodForm('update');
  };

  const handleUpdateFood = async (food) => {
    const newFood = await api.update(food.id, food);

    const newFoods = foods.map((food) =>
      food.id === newFood.id ? newFood : food
    );

    setFoods(newFoods);
  };

  const handleLoadDeleteFoodModal = (food) => {
    setSelectedFood(food);

    toggleDeleteFoodModal();
  };

  const handleDeleteFood = async (food) => {
    await api.remove(food.id);

    const newFoods = foods.filter((foodItem) => foodItem.id !== food.id);

    setFoods(newFoods);

    toggleDeleteFoodModal();
  };

  const handleSubmitFoodForm = (food) => {
    if (typeFoodForm === 'create') {
      handleCreateFood(food);
    } else {
      handleUpdateFood(food);
    }

    toggleFoodForm();
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        selectedFood,
        setSelectedFood,
        isShowFoodForm,
        setIsShowFoodForm,
        isShowDeleteFoodModal,
        setIsShowDeleteFoodModal,
        toggleFoodForm,
        toggleDeleteFoodModal,
        typeFoodForm,
        setTypeFoodForm,
        handleLoadCreateFoodForm,
        handleCreateFood,
        handleLoadUpdateFoodForm,
        handleUpdateFood,
        handleLoadDeleteFoodModal,
        handleDeleteFood,
        handleSubmitFoodForm,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  return useContext(FoodContext);
}
