'use client';

import { createContext, useState, useContext } from 'react';
import Storage from '@/services/storage';
import { formatDate } from '@/lib/format';

export const InvestmentContext = createContext({});

export function InvestmentProvider({ children }) {
  const initialInvestmentFormData = {
    name: '',
    value: '',
    origin: '',
    category: '',
    interest: '',
    created_at: '',
  };

  const [investments, setInvestments] = useState([]);

  const [isShowValues, setIsShowValues] = useState(true);

  const [isShowModal, setIsShowModal] = useState(false);

  const [isShowInvestmentForm, setIsShowInvestmentForm] = useState(false);

  const [investmentModalData, setInvestmentModalData] = useState({});

  const [investmentFormData, setInvestmentFormData] = useState(
    initialInvestmentFormData
  );

  const [investmentFormAction, setInvestmentFormAction] = useState('');

  const toggleShowValues = () => {
    setIsShowValues(!isShowValues);
  };

  const toggleShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  const toggleShowInvestmentForm = () => {
    setIsShowInvestmentForm(!isShowInvestmentForm);
  };

  const loadInvestments = async (user) => {
    if (user) {
      const investments = await Storage.read('investments', { uid: user.uid });

      setInvestments(investments);
    }
  };

  const createInvestment = async (investment) => {
    const newInvestment = await Storage.create('investments', investment);

    setInvestments([...investments, newInvestment]);
  };

  const updateInvestment = async (investment) => {
    const newInvestments = investments.filter(
      (item) => item.id !== investment.id
    );

    setInvestments([...newInvestments, investment]);

    Storage.update('investments', investment);
  };

  const removeInvestment = (id) => {
    const newInvestments = investments.filter(
      (investment) => investment.id !== id
    );

    setInvestments(newInvestments);

    Storage.remove('investments', id);
  };

  const handleLoadModalData = (id) => {
    const investment = investments.find((investment) => investment.id === id);

    setInvestmentModalData(investment);

    toggleShowModal();
  };

  const handleCreateInvestment = async () => {
    setInvestmentFormData(initialInvestmentFormData);

    setInvestmentFormAction('create');

    toggleShowInvestmentForm();
  };

  const handleDeleteInvestment = () => {
    removeInvestment(investmentModalData.id);

    toggleShowModal();
  };

  const handleUpdateInvestment = async (id) => {
    loadInvestmentFormData(id);

    setInvestmentFormAction('update');

    toggleShowInvestmentForm();
  };

  const handleFormSubmit = async (event, user) => {
    event.preventDefault();

    investmentFormData.value = Number(investmentFormData.value) * 100;

    investmentFormData.created_at = new Date(
      investmentFormData.created_at + 'T00:00:00-03:00'
    ).toISOString();

    investmentFormData.uid = user.uid;

    investmentFormAction === 'create'
      ? createInvestment(investmentFormData)
      : updateInvestment(investmentFormData);

    toggleShowInvestmentForm();
  };

  const loadInvestmentFormData = (id) => {
    const investment = investments.find((investment) => investment.id === id);

    investment.value = Number(investment.value) / 100;

    investment.created_at = formatDate(investment.created_at, 'ymd');

    setInvestmentFormData(investment);
  };

  return (
    <InvestmentContext.Provider
      value={{
        createInvestment,
        handleCreateInvestment,
        handleDeleteInvestment,
        handleFormSubmit,
        handleLoadModalData,
        handleUpdateInvestment,
        initialInvestmentFormData,
        investmentFormData,
        investmentModalData,
        investments,
        isShowInvestmentForm,
        isShowModal,
        isShowValues,
        loadInvestmentFormData,
        loadInvestments,
        removeInvestment,
        setInvestmentFormData,
        setInvestments,
        setIsShowModal,
        setIsShowValues,
        toggleShowInvestmentForm,
        toggleShowModal,
        toggleShowValues,
        updateInvestment,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestment() {
  return useContext(InvestmentContext);
}
