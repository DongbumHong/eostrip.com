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
import { faPaperPlane, faCircleChevronLeft  } from "@fortawesome/free-solid-svg-icons";
import logo from "@_images/main/logo.png";
// data
import ROUTER_LIST from "@_data/router.json";

const PasswordReminder = () => {
  const router = useRouter();
  const UserRouterList = ROUTER_LIST.USER;

  // ログイン画面へ戻るボタンクリックイベント
  const handleToLoginClick = () => {
    router.push(UserRouterList.LOGIN);
  };

  //送信ボタンクリックイベント
  const handleSendClick= () => {
    // TODO: パスワードリセット処理

  };

  return (
    <div id="login-contents" >
      <div id="login-wrap">
        <div>
            <div id="login-header" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Image src={logo} alt="YG-Mart Logo" priority={true}/>
              <p>YG-mart</p>
            </div>
          </div>

          <div>
            <h2 id="page_title" className="c-title01">
              <span className="c-title01-label">パスワードリセット</span>
            </h2>
          </div>

          <div className="login-form-header">
            <p style={{ color: "black", alignItems: "center" }}>
              ご登録のログインIDとメールアドレスが一致した場合に、<br></br>
              該当メールアドレス宛てにパスワード変更画面のURLを送信致します。
            </p>
          </div>

          <div className="login-form-label">
            <p className="login-form-text">
              ログインID　
              <span className="required">必須</span>
            </p>
          </div>
          <div className="login-form">
            <input
              // style={inputBoxes}
              type="email"
              name="id"
              maxLength={100}
              // value={values.email}
              // onChange={handleChange}
            />
          </div>

          <div className="login-form-header">
            <p className="login-form-label">
              登録メールアドレス　
              <span className="required">必須</span>
            </p>
          </div>
          <div className="login-form">
            <input
              // style={inputBoxes}
              type="email"
              name="id"
              maxLength={100}
              // value={values.email}
              // onChange={handleChange}
            />
          </div>

          <div className="p-login-button-border">
            <button className="c-button03 p-login-button-w" onClick={handleToLoginClick}>
              <FontAwesomeIcon icon={faCircleChevronLeft} size="lg" className="fa-icon" />
              <span>ログイン画面へ戻る</span>
            </button>
            <button className="c-button02 p-login-button" onClick={handleSendClick}>
              <FontAwesomeIcon icon={faPaperPlane} size="lg" className="fa-icon" />
              <span>送信する</span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default PasswordReminder;