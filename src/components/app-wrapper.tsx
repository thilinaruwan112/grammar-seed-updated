'use client';

import { useState } from 'react';
import Preloader from '@/components/preloader';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onAnimationComplete={() => setIsLoading(false)} />}
      {children}
    </>
  );
}
