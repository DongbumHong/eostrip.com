// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils
import { getUserTopPath } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";
// containers
import INITIAL from "@_containers/user/top/initial";

const UserRouterList = ROUTER_LIST.USER;

const Top = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = 'トップ YG-mart'; // ページタイトルを設定

    const checkPage = async () => {
      const topPath = await getUserTopPath();
      console.info("*** User TOP Page *** ", topPath);
      
      if(topPath !== UserRouterList.TOP) router.push(topPath); 
    }
    checkPage();

  }, [router]);

  return (
    <div><INITIAL></INITIAL></div>
  );
};

export default Top;