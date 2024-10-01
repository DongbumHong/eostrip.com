// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils
import { getAdminTopPath } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";
// containers
import LOGIN from "@_containers/admin/login/login-main";

const AdminRouterList = ROUTER_LIST.ADMIN;

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = 'ログリン YG-mart'; // ページタイトルを設定

    const checkPage = async () => { 
      const topPath = await getAdminTopPath();
      console.info("*** ADMIN Login Page *** ", topPath);

      if(topPath !== AdminRouterList.LOGIN) router.push(topPath); 
    };
    checkPage(); 
    
  }, [router]);

  return (
    <LOGIN></LOGIN>
  );
};

export default Login;