// Next.js React
'use client'
import { useEffect, useState } from 'react';
// containers
import REMINDER from "@_containers/admin/login/password-reminder";

const PasswordReminder = () => {
  useEffect(() => {
    document.title = 'パスワードリセット YG-mart'; // ページタイトルを設定
    
  }, []);

  console.info("*** ADMIN Password Reminder Page *** ");

  return (
    <REMINDER></REMINDER>
  );
};

export default PasswordReminder;