import 'bootstrap';
import { investments } from './data.js';
import { InvestmentCard } from './components/InvestmentCard.js';

import 'bootstrap/dist/css/bootstrap.css';

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');
