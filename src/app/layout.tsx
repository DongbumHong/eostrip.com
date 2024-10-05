"use client";	// Client Component로 설정

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import '@_styles//globals.css'
import { useEffect, useState } from 'react';

import Image from 'next/image';
import logo from "@_images/sub/logo.png";

import kakao from "@_images/sns/kakao.jpg";
import line from "@_images/sns/line.jpg";
import instar from "@_images/sns/instar.jpg";
import facebook from "@_images/sns/facebook.jpg";
import youtube from "@_images/sns/youtube.jpg";



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const [isMenuVisible, setMenuVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // 모바일 크기 감지
		};

		// 초기 렌더링 시에도 크기 체크
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleToggleMenu = () => {
		setMenuVisible((prev) => !prev);
	};
	
	return (
		<html lang="en">
			<body>
				<div className="container">
					{/* <header className="header"> */}
					<div className="navbar">
						<Image src={logo} alt="로고" width={40} height={40} />
						<h3>EOS GOLF TOUR</h3>
						{!isMobile && ( // 모바일이 아닐 때만 기본 메뉴 표시
							<>
								<a href="#about">프리미엄 상품</a>
								<a href="#services">골프투어</a>
								<a href="#gallery">규슈관광</a>
								<a href="#contact">문의하기</a>
							</>
						)}

						{isMobile && ( // 모바일일 때만 메뉴 토글 버튼 표시
							<a href="#full" id="menu-toggle" className="active" onClick={handleToggleMenu}>
								{isMenuVisible ? '≣ 메뉴' : '≣ 메뉴'}
							</a>
						)}
					</div>
					{/* </header> */}

					{/* 모바일 환경에서만 메뉴를 보여줍니다 */}
					{isMobile && isMenuVisible && (
						<div className="full-menu" id="full-menu">
							<ul>
								<li>프리미엄 상품</li>
								<li>골프투어</li>
								<li>규슈관광</li>
								<li>문의하기</li>
							</ul>
						</div>
					)}

					{/* page.tsx */}
					<div>{children}</div>

					<div className="header_sns">
						<ul className="ftr_social">
							<li><a href="https://story.kakao.com/ch/verygoodtour" target="_blank" className="f_kakao"><Image src={kakao} alt="kakao"/></a></li>
							<li><a href="https://blog.naver.com/vgt0901" target="_blank" className="f_pinter"><Image src={line} alt="line"/></a></li>
							<li><a href="https://www.instagram.com/verygoodtour_official" target="_blank" className="f_facebook"><Image src={instar} alt="instar"/></a></li>
							<li><a href="https://www.facebook.com/verygoodtour" target="_blank" className="f_insta"><Image src={facebook} alt="facebook"/></a></li>
							<li><a href="https://www.youtube.com/user/verygoodtourofficial" target="_blank" className="f_blog"><Image src={youtube} alt="youtube"/></a></li>
						</ul>
					</div>

					<footer>
						<div>
							<div className="footer_head">
								<h2>에오스 골프투어</h2>
							</div>
						</div>
						<span className="footer_info">
							대표이사 : 지정훈 <br />
							〒812-0013 福岡市博多区博多駅東3－9－7－503号 <br />
							대표전화 + 81-92-285-2430 │ Mobile : + 81-90-3327-9397 <br />
							※ 에오스골프투어는 여행상품 판매에 대하여 현지대응자로서 통신판매의 당사자가 아니며 
							해당 상품의 거래 정보 및 거래 등에 대해 책임을 지지 않습니다. <br />
							Copyright © eosgolftour.com All rights reserved.
						</span>
						<br></br>
					</footer>
				</div>
			</body>
		</html>
	);
}
