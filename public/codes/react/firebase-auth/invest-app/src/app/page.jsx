'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import InvestmentCard from '@/components/InvestmentCard';
import { useInvestment } from '@/contexts/InvestmentContext';
import InvestmentForm from '@/components/InvestmentForm';
import Modal from '@/components/Modal';
import ProtectedPage from '@/components/ProtectedPage';
import { useUserAuth } from '@/contexts/UserAuthContext';

export default function Home() {
  const {
    investments,
    loadInvestments,
    isShowValues,
    toggleShowValues,
    handleCreateInvestment,
  } = useInvestment();
  const { user } = useUserAuth();

  useEffect(() => {
    if (user?.uid) {
      loadInvestments(user);
    }
  }, [user]);

  return (
    <ProtectedPage>
      <header className="py-12">
        <div className="float-right" onClick={toggleShowValues}>
          {isShowValues ? <IconEye size={24} /> : <IconEyeOff size={24} />}
        </div>
        <h1 className="text-center text-2xl font-bold">Investimentos</h1>
      </header>

      {investments?.length ? (
        <div className="investments grid grid-cols-3 gap-3">
          {investments.map((investment) => (
            <InvestmentCard {...investment} key={investment.id} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-8">Nenhum investimento cadastrado.</p>
      )}

      <div className="fixed bottom-8 right-8">
        <button
          type="button"
          className="new-investment-btn py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
          onClick={() => handleCreateInvestment()}
        >
          +
        </button>
      </div>

      <InvestmentForm />

      <Modal />
    </ProtectedPage>
  );
}
