import 'preline';
import '@iconify/iconify';

import InvestmentForm from './components/InvestmentForm';
import Modal from './components/Modal';
import Investments from './lib/investments';

import '../css/style.css';

Investments.load();

InvestmentForm.create();

Modal.create();
