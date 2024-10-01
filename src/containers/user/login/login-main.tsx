// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// Style Sheets
import '@_styles/container.css'
import '@_styles/common.css'
// Image
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faExclamationCircle  } from "@fortawesome/free-solid-svg-icons";
import logo from "@_images/main/logo.png";
// utils
import { saveUserLoginInfo } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";

const LoginMain = () => {
  const router = useRouter();
  const UserRouterList = ROUTER_LIST.USER;

  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isLoginErrorVisible, setIsLoginErrorVisible] = useState(false);

  // ログインID変更イベント
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(event.target.value);
  };

  // パスワード変更イベント
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  // ログインボタンクリックイベント
  const handleLoginClick = async() => {
    if (inputId === "" || inputPassword === "") {
      setIsLoginErrorVisible(true);
    
    } else {
      setIsLoginErrorVisible(false);
      
      // TODO: ログイン処理
      await saveUserLoginInfo(true, "");
      router.push(UserRouterList.SELECT);
    
    }
  };

  // パスワードリマインダーリンククリックイベント
  const handleReminderClick= async() => {
    await saveUserLoginInfo(false, "");
    router.push(UserRouterList.REMINDER);
  };

  return (
    <div id="login-contents" >
      <div id="login-wrap">
        <div>
          <div id="login-header" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image src={logo} alt="YG-Mart Logo" priority={true} />
            <p>YG-mart</p>
          </div>
        </div>

        <div className="login-form-header">
          <p className="login-form-label">ログインID</p>
        </div>
        <div className="login-form">
          <input
            // style={inputBoxes}
            type="email"
            name="id"
            maxLength={100}
            // value={values.email}
            onChange={handleIdChange}
          />
          <div>
            <span className="login-form-text">※ログインID、またはメールアドレスを入力してください</span>
          </div>
        </div>

        <div className="login-form-header">
          <p className="login-form-label">パスワード</p>
        </div>
        <div className="login-form">
          <input
            // style={inputBoxes}
            type="password"
            name="pw"
            maxLength={30}
            // value={values.password}
            onChange={handlePasswordChange}
          />
        </div>

        {isLoginErrorVisible && (
        <div className="c-form-error-message">
          <p>
            <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
            <span> ログインできません。ログインID、パスワードを確認してください。</span><br />
          </p>
        </div>
        )}

        <div className="p-login-button-border">
          <button className="c-button02 p-login-button" onClick={handleLoginClick} >
            <FontAwesomeIcon icon={faLock} size="lg" className="fa-icon" />
            <span>ログイン</span>
          </button>
        </div>

        <p>
          <a href="#" onClick={handleReminderClick}>パスワードを忘れた方はこちら</a>
        </p>
      </div>
    </div>
  );
};

export default LoginMain;