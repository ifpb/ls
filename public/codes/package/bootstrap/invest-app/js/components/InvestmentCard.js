import { formatCurrency, formatDate } from '../lib/utils';

export function InvestmentCard(investment) {
  return `
    <div class="col">
      <div
        id="investment-${investment.id}"
        class="bg-white card"
      >
        <div class="card-header d-flex justify-content-between align-items-center">
          <div class="fs-5 fw-bold text-primary-emphasis">
            ${investment.name}
          </div>
          <div class="fs-5 fw-bold text-primary-emphasis">
            ${formatCurrency(investment.value)}
          </div>
        </div>
        <div class="card-body">
          <p class="my-1 text-secondary-emphasis">
            <span class="fw-bold">Origem:</span>
            ${investment.origin}
          </p>
          <p class="my-1 text-secondary-emphasis">
            <span class="fw-bold">Categoria:</span>
            ${investment.category}
          </p>
          <p class="my-1 text-secondary-emphasis">
            <span class="fw-bold">Data:</span>
            ${formatDate(investment.created_at)}
          </p>
          <p class="my-1 text-secondary-emphasis">
            <span class="fw-bold">Taxa:</span>
            ${investment.interest}
          </p>
        </div>
      </div>
    </div>
  `;
}
