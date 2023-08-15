import { formatCurrency, formatDate } from '../lib/utils.js';

export function InvestmentCard(investment) {
  return `
    <div
      id="investment-${investment.id}"
      class="bg-white shadow-md rounded-lg p-4"
    >
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-700">
          ${investment.name}
        </h3>
        <p class="text-lg font-semibold text-gray-700">
          ${formatCurrency(investment.value)}
        </p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500">
          <span class="font-bold">Origem:</span>
          ${investment.origin}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Categoria:</span>
          ${investment.category}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Data:</span>
          ${formatDate(investment.created_at)}
        </p>
        <p class="text-sm text-gray-500">
          <span class="font-bold">Taxa:</span>
          ${investment.interest}
        </p>
      </div>
    </div>
  `;
}
