'use client';

import Navbar from '@/components/dashboard/Navbar';
import { checkLocalClient } from '@/utils/checkClient';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkClient = async () => {
      const isClientRunning = await checkLocalClient();
      
      if (!isClientRunning) {
        router.push('/download');
      }
    };

    checkClient();
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Your dashboard content */}
      </div>
    </>
  );
}
