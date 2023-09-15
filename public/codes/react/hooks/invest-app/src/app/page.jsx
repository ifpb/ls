'use client';

import { useEffect } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import InvestmentCard from '@/components/InvestmentCard';
import { useInvestment } from '@/contexts/InvestmentContext';

export default function Home() {
  const { investments, loadInvestments, isShowValues, toggleShowValues } =
    useInvestment();

  useEffect(() => {
    loadInvestments();
  }, []);

  return (
    <>
      <header className="my-12">
        <div className="float-right" onClick={toggleShowValues}>
          {isShowValues ? <IconEye size={24} /> : <IconEyeOff size={24} />}
        </div>
        <h1 className="text-center text-2xl font-bold">Investimentos</h1>
      </header>

      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <InvestmentCard {...investment} key={investment.id} />
        ))}
      </div>
    </>
  );
}
