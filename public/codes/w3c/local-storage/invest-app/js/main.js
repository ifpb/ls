import 'preline';
import '@iconify/iconify';

import InvestmentForm from './components/InvestmentForm';
import Investments from './lib/investments';

import '../css/style.css';

Investments.load();

InvestmentForm.create();
