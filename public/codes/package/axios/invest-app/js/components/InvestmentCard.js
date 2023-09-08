import Investments from '../lib/investments';
import InvestmentForm from './InvestmentForm';
import { $ } from '../lib/dom';
import { formatCurrency, formatDate } from '../lib/format';

function create(investment) {
  const card = `
    <div
      id="investment-${investment.id}"
      class="bg-white shadow-md rounded-lg p-4 relative"
    >
      <div class="flex justify-between items-center">
        <h3 class="investment-name text-lg font-semibold text-gray-700">
          ${investment.name}
        </h3>
        <p class="investment-value text-lg font-semibold text-gray-700">
          ${formatCurrency(investment.value / 100)}
        </p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500">
          <span class="font-bold">Origem:</span>
          <span class="investment-origin">
            ${investment.origin}
          </span>
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Categoria:</span>
          <span class="investment-category">
            ${investment.category}
          </span>
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Taxa:</span>
          <span class="investment-interest">
            ${investment.interest}
          </span>
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Data:</span>
          <span class="investment-created_at">
            ${formatDate(investment.created_at)}
          </span>
        </p>
      </div>
      <div class="absolute bottom-4 right-4 inline-flex">
        <span
          class="icon-trash mr-1 text-gray-400 hover:text-gray-700 cursor-pointer"
          data-hs-overlay="#hs-basic-modal"
        >
          <span
            class="iconify"
            data-icon="solar:trash-bin-minimalistic-broken"
          >
          </span>
        </span>
        <span
          class="icon-pencil text-gray-400 hover:text-gray-700 cursor-pointer"
          data-hs-overlay="#investment-drawer"
        >
          <span
            class="iconify"
            data-icon="tabler:pencil"
          >
          </span>
        </span>
      </div>
    </div>
  `;

  $('.investments').insertAdjacentHTML('beforeend', card);

  $(`#investment-${investment.id} .icon-pencil`).onclick = () => {
    InvestmentForm.setValues(investment);

    InvestmentForm.handleSubmit((investment) => Investments.update(investment));
  };

  $(`#investment-${investment.id} .icon-trash`).onclick = () => {
    $(`.modal .investment-name`).innerText = investment.name;

    $(`.modal .remove-investment-btn`).onclick = () =>
      Investments.remove(investment);
  };
}

function update({ id, name, value, origin, category, interest, created_at }) {
  value = formatCurrency(value / 100);

  created_at = formatDate(created_at);

  $(`#investment-${id} .investment-name`).innerText = name;

  $(`#investment-${id} .investment-value`).innerText = value;

  $(`#investment-${id} .investment-origin`).innerText = origin;

  $(`#investment-${id} .investment-category`).innerText = category;

  $(`#investment-${id} .investment-interest`).innerText = interest;

  $(`#investment-${id} .investment-created_at`).innerText = created_at;
}

function remove(id) {
  $(`#investment-${id}`).remove();
}

export default { create, update, remove };
