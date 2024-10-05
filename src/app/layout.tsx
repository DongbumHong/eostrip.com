import { Inter } from "next/font/google";
import type { Metadata } from "next";
import '@_styles//globals.css'
import '@_styles//common3.css'
import { useEffect, useState } from 'react';

import Image from 'next/image';
import logo from "@_images/sub/logo.jpg";

import kakao from "@_images/sns/kakao.jpg";
import line from "@_images/sns/line.jpg";
import instar from "@_images/sns/instar.jpg";
import facebook from "@_images/sns/facebook.jpg";
import youtube from "@_images/sns/youtube.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	description: "Welcome To YG-Mart",
	icons: {
		icon: "/favicon.ico",
	},
};



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className={"container"}>
					<header className="header">
						<div className="navbar">
							<Image src={logo} alt="로고" />
							<a href="#full" id="menu-toggle" className="active">≣전체메뉴</a>
							<a href="#about">프리미엄 상품</a>
							<a href="#services">골프투어</a>
							<a href="#gallery">규슈관광</a>
							<a href="#contact">문의하기</a>
						</div>

						<div className="full-menu" id="full-menu">
							<a href="#full">전체메뉴</a>
							<a href="#about">프리미엄 상품</a>
							<a href="#services">골프투어</a>
							<a href="#gallery">규슈관광</a>
							<a href="#contact">문의하기</a>
						</div>
					</header>
				</div>

				<div>{children}</div>

				<div className="header_sns">
					<ul className="ftr_social">
						<li><a href="https://story.kakao.com/ch/verygoodtour" target="_blank" className="f_kakao"><Image src={kakao} alt="kakao"/></a></li>
						<li><a href="https://pf.kakao.com/_zbjGE" target="_blank" className="f_pinter"><Image src={line} alt="line"/></a></li>
						<li><a href="https://www.facebook.com/verygoodtour" target="_blank" className="f_facebook"><Image src={instar} alt="instar"/></a></li>
						<li><a href="https://www.instagram.com/verygoodtour_official" target="_blank" className="f_insta"><Image src={facebook} alt="facebook"/></a></li>
						<li><a href="https://blog.naver.com/vgt0901" target="_blank" className="f_blog"><Image src={youtube} alt="youtube"/></a></li>
					</ul>
				</div>

				<footer className={"sub_wrap newfooter"}>
					<div className="footer_bigdiv">
						<div className="footer_head">
							<h3>에오스골프투어</h3>
						</div>
					</div>
					<span className="footer_info">
						대표이사 : 지정훈 │ 〒812-0013 福岡市博多区博多駅東3－9－7－503号 │ 대표전화 + 81-92-285-2430 │ Mobile : + 81-90-3327-9397 <br />
						※ 에오스골프투어는 여행상품 판매에 대하여 현지대응자로서 통신판매의 당사자가 아니며 해당 상품의 거래 정보 및 거래 등에 대해 책임을 지지 않습니다.<br />
						Copyright © eosgolftour.com All rights reserved.
					</span>
					<br></br>
				</footer>
			</body>

			
		</html>
	);
}
