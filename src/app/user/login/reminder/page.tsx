// Next.js React
'use client'
import { useEffect, useState } from 'react';
// containers
import REMINDER from "@_containers/user/login/password-reminder";

const PasswordReminder = () => {
  useEffect(() => {
    document.title = 'パスワードリセット YG-mart'; // ページタイトルを設定
    
  }, []);

  console.info("*** USER Password Reminder Page *** ");

  return (
    <REMINDER></REMINDER>
  );
};

export default PasswordReminder;