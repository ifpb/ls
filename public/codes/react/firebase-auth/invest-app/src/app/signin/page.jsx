'use client';

import { useUserAuth } from '@/contexts/UserAuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const { logIn, googleSignIn } = useUserAuth();

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    setError('');

    try {
      await logIn(email, password);

      router.push('/');
    } catch (err) {
      setError('Erro no login, tente novamente.');
    }
  };

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();

    try {
      await googleSignIn();

      router.push('/');
    } catch (error) {
      setError('Erro no login, tente novamente.');
    }
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-full px-6 py-12 lg:px-8">
      <h1 className="mb-8 text-3xl text-center">Entrar</h1>
      {error && (
        <div class="bg-orange-100 text-orange-700 p-4 my-4" role="alert">
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleLogin}>
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
          />
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Entrar
        </button>

        <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            ou
          </p>
        </div>

        <button
          type="button"
          className="text-white w-full mt-4 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          onClick={handleGoogleSignIn}
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Entrar com Google<div></div>
        </button>
      </form>
    </div>
  );
}
