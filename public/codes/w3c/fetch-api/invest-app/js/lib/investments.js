import InvestmentCard from '../components/InvestmentCard';
import Storage from '../services/storage';

async function load() {
  const investments = await Storage.read('investments');

  investments.forEach(InvestmentCard.create);
}

async function create(investment) {
  const createdInvestment = await Storage.create('investments', investment);

  InvestmentCard.create(createdInvestment);
}

async function update(investment) {
  const { id } = investment;

  const updatedInvestment = await Storage.update(
    `investments?id=eq.${id}`,
    investment
  );

  InvestmentCard.update(updatedInvestment);
}

async function remove(investment) {
  const { id } = investment;

  Storage.remove(`investments?id=eq.${id}`);

  InvestmentCard.remove(id);
}

export default { load, create, update, remove };
