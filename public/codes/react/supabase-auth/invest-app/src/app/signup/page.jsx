'use client';

import { useUserAuth } from '@/contexts/UserAuthContext';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState('');

  const { signUp } = useUserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage('');

    if (password !== confirmPassword) {
      setMessage('As senhas não conferem.');
    }

    try {
      if (!message) {
        await signUp(email, password);

        setMessage('Acess sua caixa de email para confirmar o cadastro.');
      }
    } catch (err) {
      setMessage('Erro no cadastro, tente novamente.');
    }
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-full px-6 py-12 lg:px-8">
      <h1 className="mb-8 text-3xl text-center">Cadastro</h1>
      {message && (
        <div class="bg-gray-300 text-gray-700 p-4 my-4" role="alert">
          <p>{message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Confirmar Senha
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
