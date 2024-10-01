// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils
import { getUserTopPath } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";
// containers
import LOGIN from "@_containers/user/login/login-main";

const UserRouterList = ROUTER_LIST.USER;

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = 'ログリン YG-mart'; // ページタイトルを設定

    const checkPage = async () => { 
      const topPath = await getUserTopPath();
      console.info("*** USER Login Page *** ", topPath);

      if(topPath !== UserRouterList.LOGIN) router.push(topPath); 
    };
    checkPage(); 
    
  }, [router]);

  return (
    <LOGIN></LOGIN>
  );
};

export default Login;