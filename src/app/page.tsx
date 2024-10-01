// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils 
import INITIAL from "@_containers/top/initial";

const Main = () => {
  const router = useRouter();
  
  useEffect(() => {
    const checkPage = async () => { 
      console.info("*** Main Page *** ");

    };
    checkPage();

  }, [router]);

  return (
    <div><INITIAL></INITIAL></div>
  );
};

export default Main;