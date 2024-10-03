// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils 
import INITIAL from "@_containers/top/initial";
import '@_styles//globals.css'

const Main = () => {
	const router = useRouter();
	
	useEffect(() => {
		const checkPage = async () => { 
			console.info("*** Main Page *** ");

		};
		checkPage();

	}, [router]);

	return (
		<div className={"container"}>
			<header className={"header"}>
				<h1>Very Good Golf Tour Japan</h1>
			</header>

			<main className={"main"}>
				<div><INITIAL></INITIAL></div>
				{/* <div className={"details"}>
					<h2>이미지 상세 화면</h2>
					<p>여기에 상세 정보를 넣을 수 있습니다.</p>
				</div> */}
			</main>

			<footer className={"footer"}>
				<div className={"footerRow"}>
					<p>여행문의: example@example.com</p>
					<p>전화번호(한국): +82-2-1234-5678</p>
					<p>전화번호(일본): +81-92-1234-5678</p>
				</div>
				<div className={"footerRow"}>
					<p>주소: 日本福岡県福岡市 123</p>
				</div>
				<div className={"footerRow"}>
					<p>© 2024 Company. Very Good Golf Tour Japan</p>
				</div>
			</footer>
		</div>
	);
};

export default Main;