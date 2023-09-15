'use client';

import { createContext, useState, useContext } from 'react';
import Storage from '@/services/supabase';

export const InvestmentContext = createContext({});

export function InvestmentProvider({ children }) {
  const [investments, setInvestments] = useState([]);

  const [isShowValues, setIsShowValues] = useState(true);

  const toggleShowValues = () => {
    setIsShowValues(!isShowValues);
  };

  const loadInvestments = async () => {
    const investments = await Storage.read('investments');

    setInvestments(investments);
  };

  const removeInvestment = (id) => {
    const newInvestments = investments.filter(
      (investment) => investment.id !== id
    );

    setInvestments(newInvestments);

    Storage.remove('investments', id);
  };

  return (
    <InvestmentContext.Provider
      value={{
        investments,
        setInvestments,
        isShowValues,
        setIsShowValues,
        toggleShowValues,
        loadInvestments,
        removeInvestment,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestment() {
  return useContext(InvestmentContext);
}
