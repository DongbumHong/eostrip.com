// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils 
import { getAdminTopPath } from '@_utils/login-util';

const Main = () => {
  const router = useRouter();
  
  useEffect(() => {
    const checkPage = async () => { 
      const topPath = await getAdminTopPath(); 
      console.info("*** ADMIN Main Page *** ", topPath);
      router.push(topPath); 
    };
    checkPage();

  }, [router]);
};

export default Main;