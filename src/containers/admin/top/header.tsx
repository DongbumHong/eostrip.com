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
import { faRefresh, faHeart, faBars, faEnvelope, faBook,  faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "@_images/main/logo.png";
// utils
import { saveAdminLoginInfo } from '@_utils/login-util';
// data/type
import ROUTER_LIST from "@_data/router.json";

const TopHeader = () => {
  const router = useRouter();
  const AdminRouterList = ROUTER_LIST.ADMIN;

  // ログアウトボタンクリックイベント
  const handleLogoutClick = async() => {
    await saveAdminLoginInfo(false, "");
    router.push(AdminRouterList.LOGIN);
  };

  return (
    <div>
      <div className="c-container-center">
        <div className="l-header" style={{display: 'flex' }}>
          <div style={{ padding: '5px 25px 5px 5px', order: 1 }}>
            <div className="l-header-logo">
              <a href="https://test.yg-mart.jp/aec/user/">
                <Image src={logo} alt="YG-Mart Logo" priority={true}/>
              </a>
            </div>
          </div>
          
          <div style={{ padding: '5px 5px 5px 25px', order: 2 }}>
            <div>
              <ul className="l-header-orderNav">
                <li><a href="https://test.yg-mart.jp/aec/user/order_history" className="c-button03">
                  <FontAwesomeIcon icon={faRefresh} size="lg" className="fa-icon" />
                  <span>注文履歴・再注文</span></a></li>
                <li><a href="https://test.yg-mart.jp/aec/user/shohin_list?f=1" className="c-button03 js-submit-once">
                  <FontAwesomeIcon icon={faHeart} size="lg" className="fa-icon" />
                  <span>お気に入り商品</span></a></li>
              </ul>
            </div>
          </div>
        
          <div style={{ padding: '5px', marginLeft: 'auto', order: 3 }}>
            <div className="l-header-group01">
              <div className="l-header-nav">
                <ul className="l-header-utilityNav">
                  <li>
                    <a href="https://test.yg-mart.jp/aec/user/guide">
                      <FontAwesomeIcon icon={faBars} size="lg" className="fa-icon" />
                      <span>ご利用ガイド</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://test.yg-mart.jp/aec/user/inquiry_form">
                      <FontAwesomeIcon icon={faEnvelope} size="lg" className="fa-icon" />
                      <span>お問い合わせ</span>
                    </a>
                  </li>
                </ul>
                <ul className="l-header-userNav">
                  <li>
                    <div className="menu-container">
                      <span className="c-button04">
                        <FontAwesomeIcon icon={faBars} size="lg" className="fa-icon" />
                        <span>会員メニュー</span>
                      </span>
                      <div className="l-header-userNav-inner">
                        <ul className="l-header-userNav-child">
                          <li><a href="#;" /*onclick="document.location.href=&#39;/aec/user/order_history&#39;"*/><span>注文履歴</span></a></li>
                          <li><a href="#" className="js-submit-once" /*onclick="document.location.href=&#39;/aec/user/shohin_list?f=1&#39;"*/><span>お気に入り商品</span></a></li>
                          <li><a href="#" /*onclick="document.location.href=&#39;/aec/user/user_charge_info&#39;"*/><span>会員情報変更</span></a></li>
                          <ul>
                            <li><a href="#" /*onclick="document.location.href=&#39;/aec/user/select_login_delivery&#39;"*/><span>得意先変更</span></a></li>
                          </ul>
                          <li><a href="#" onClick={handleLogoutClick}><span>ログアウト</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          
            <div className="l-header-group03">
              <p className="l-header-delivery l-header-user">
                <span>ＦuｔuｒｅＲａｙｓ㈱</span><br/>
                <span>＊テスト作業所(１)＊</span>
              </p>
              <p className="l-header-delivery l-header-usercharge">
                <span>井上昌信</span>&nbsp;様&nbsp;
              </p>
            </div>

          </div>
        </div>
      </div>

      <nav>
        <div className="l-nav c-container-center">
          <p className="l-nav-catalogSearch l-nav-item">
            <a href="https://test.yg-mart.jp/aec/user/catalog_list" className="c-button02">
              <FontAwesomeIcon icon={faBook} size="lg" className="fa-icon" />
              <span className="top-button-text">カタログから探す</span>
            </a>
          </p>
        
          <form method="post" action="https://test.yg-mart.jp/aec/user/shohin_list" className="js-submit-once">
            <div className="l-nav-keywordSearch l-nav-item">
              <input type="hidden" name="p" value="1" />
              <input type="text" name="k" placeholder="商品名や商品コードで検索" className="l-nav-keywordSearch-input" />

              <div id="detailSearch" className="l-nav-item l-contents-header-search">
                <div id="detailSearchButton" className="l-contents-header-search-button">
                  <span>詳細検索▼</span>
                </div>
              </div>
            </div>
            <p className="l-nav-detailSearch l-nav-item">
              <button className="l-nav-keywordSearch-icon l-contents-header-search-nav" type="button" /*onclick="onClickSearchButtonFnc(this);"*/>
                <FontAwesomeIcon icon={faSearch} size="sm" className="fa-icon" />
                <span className="top-search-text">検索</span>
              </button>
            </p>
          </form>
          
          <div className="l-nav-cartBox l-nav-item">
            <a href="https://test.yg-mart.jp/aec/user/cart">
              <dl>
                <dt>
                  <FontAwesomeIcon icon={faShoppingCart} size="xl" className="fa-icon" />
                  <span className="l-nav-cartBox-title">カート</span>
                </dt>
                <dd className="js-header-count">0点</dd>
                <dd className="js-header-wholesale-price">¥0</dd>
              </dl>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;