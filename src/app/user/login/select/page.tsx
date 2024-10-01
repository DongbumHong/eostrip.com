// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils
import { getUserTopPath, saveUserLoginInfo } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";
// containers
import SELECT from "@_containers/user/login/select-company";

const UserRouterList = ROUTER_LIST.USER;

const SelectCompany = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = '会社・お届け先選択 YG-mart'; // ページタイトルを設定

    const checkPage = async () => {
      const topPath = await getUserTopPath();
      if(topPath !==  UserRouterList.TOP) await saveUserLoginInfo(false, "");
      console.info("*** USER Select Company Page *** ", topPath);

      if(topPath !== UserRouterList.SELECT) router.push(topPath); 

    };
    checkPage(); 
    
  }, [router]);

  return (
    <SELECT></SELECT>
  );
};

export default SelectCompany;