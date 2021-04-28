import { createContext, useState, useContext } from 'react';

export const FoodContext = createContext({});

export function FoodContextProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [isShowFoodForm, setIsShowFoodForm] = useState(false);

  const toggleFoodForm = () => {
    setIsShowFoodForm(!isShowFoodForm);
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        isShowFoodForm,
        setIsShowFoodForm,
        toggleFoodForm,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  return useContext(FoodContext);
}
