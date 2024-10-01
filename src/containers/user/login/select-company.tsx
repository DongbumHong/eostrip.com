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
import { faLock, faSearch  } from "@fortawesome/free-solid-svg-icons";
import logo from "@_images/main/logo.png";
// utils
import { saveUserLoginInfo } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";
import VARIABLES from "@_data/variables.json";

const SelectCompany = () => {
  const router = useRouter();
  const UserRouterList = ROUTER_LIST.USER;

  // ログインボタンクリックイベント
  const handleLoginClick= async() => {
    // TODO: ログイン・トークン取得処理
    const token = VARIABLES.TEST.JWT_TOKEN;
    await saveUserLoginInfo(true, token);

    router.push(UserRouterList.TOP);
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

        <div className="login-form-header">
          <p className="login-form-label">ログインする会社を選択してください</p>
        </div>
        <div className="login-form">
          <table className="login_user_search">
            <tbody>
              <tr>
                <th className="login_user_code_field login_user_code_shaded">会社</th>
                <td className="login_user_name">
                    <label id="userName">ＦuｔuｒｅＲａｙｓ㈱ ＊テスト作業所(１)＊</label>
                </td>
                <td className="login_user_code_button">
                  <div id="open_user_search_list">
                    <button className="c-button02">
                      <FontAwesomeIcon icon={faSearch} size="xs" className="fa-icon" />
                      <span className="login-form-search-text">検索</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-login-button-border">
          <button className="c-button02 p-login-button" onClick={handleLoginClick}>
            <FontAwesomeIcon icon={faLock} size="lg" className="fa-icon" />
            <span>ログイン</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;