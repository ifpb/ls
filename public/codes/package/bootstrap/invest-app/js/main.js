import 'bootstrap';
import { investments } from './data';
import { InvestmentCard } from './components/InvestmentCard';

import 'bootstrap/dist/css/bootstrap.css';

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');
