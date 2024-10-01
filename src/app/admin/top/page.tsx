// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils
import { getAdminTopPath } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";
// containers
import INITIAL from "@_containers/admin/top/initial";

const AdminRouterList = ROUTER_LIST.ADMIN;

const Top = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = 'トップ YG-mart'; // ページタイトルを設定

    const checkPage = async () => {
      const topPath = await getAdminTopPath();
      console.info("*** ADMIN TOP Page *** ", topPath);
      
      if(topPath !== AdminRouterList.TOP) router.push(topPath); 
    }
    checkPage();

  }, [router]);

  return (
    <div><INITIAL></INITIAL></div>
  );
};

export default Top;