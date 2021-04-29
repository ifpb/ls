import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { FoodContextProvider } from './contexts/FoodContext';

ReactDOM.render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>,
  document.getElementById('root')
);
