'use client';

import Link from 'next/link';
import { IconTrash } from '@tabler/icons-react';
import { formatCurrency, formatDate } from '@/lib/format';
import { useInvestment } from '@/contexts/InvestmentContext';

export default function InvestmentCard({
  id,
  name,
  value,
  origin,
  category,
  interest,
  created_at,
}) {
  const { removeInvestment, isShowValues } = useInvestment();

  const handleDeleteInvestment = (id) => {
    if (confirm(`Deseja remover ${name}?`)) {
      removeInvestment(id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 relative">
      <div className="flex justify-between items-center">
        <Link href={`/investments/${id}`}>
          <h3 className="investment-name text-lg font-semibold text-gray-700">
            {name}
          </h3>
        </Link>
        <p className="investment-value text-lg font-semibold text-gray-700">
          {isShowValues ? formatCurrency(value / 100) : 'R$ ****'}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Origem:</span>
          <span className="investment-origin">{origin}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Categoria:</span>
          <span className="investment-category">{category}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Taxa:</span>
          <span className="investment-interest">{interest}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Data:</span>
          <span className="investment-created_at">
            {formatDate(created_at)}
          </span>
        </p>
      </div>
      <div className="absolute bottom-4 right-4 inline-flex">
        <IconTrash
          size={20}
          className="text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={() => handleDeleteInvestment(id)}
        />
      </div>
    </div>
  );
}
