'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '@/services/supabase';

const UserAuthContext = createContext({});

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  function logIn(email, password) {
    return supabase.auth.signInWithPassword({ email, password });
  }

  function signUp(email, password) {
    return supabase.auth.signUp({ email, password });
  }

  function logOut() {
    setUser(null);

    return supabase.auth.signOut();
  }

  async function googleSignIn() {
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('session', event, session);

      if (session) {
        setUser(session?.user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {loading ? <div>Loading...</div> : children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
