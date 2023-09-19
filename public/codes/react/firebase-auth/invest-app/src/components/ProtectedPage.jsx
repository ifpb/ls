'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useUserAuth } from '@/contexts/UserAuthContext';

export default function ProtectedPage({ children }) {
  const { user } = useUserAuth();
  const router = useRouter();

  if (user == null) {
    router.push('/signin');
  }

  useEffect(() => {
    if (user == null) {
      router.push('/signin');
    }
  }, [user]);

  return <>{children}</>;
}
