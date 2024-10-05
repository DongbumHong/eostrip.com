// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils 
import MAIN from "@_containers/main";
import PROMOTION from "@_containers/promotion";
import PREMIUM from "@_containers/premium";
import GOLFTOUR from "@_containers/golf-tour";
import KYSHUTOUR from "@_containers/kyushu-tour";
import CONTACT from "@_containers/contact";
import '@_styles//globals.css'

const Main = () => {
	const router = useRouter();
	
	useEffect(() => {
		const checkPage = async () => { 
			console.info("*** Main Page *** ");

		};
		checkPage();

	}, [router]);

	const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        // 브라우저 환경에서만 window 객체에 접근 가능하도록 설정
        setIsBrowser(true);
    }, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div>
			<main className="main">
				<div><MAIN></MAIN></div>
				<div><PROMOTION></PROMOTION></div>
				<div><PREMIUM></PREMIUM></div>
				<div><GOLFTOUR></GOLFTOUR></div>
				<div><KYSHUTOUR></KYSHUTOUR></div>
				<div><CONTACT></CONTACT></div>
			</main>
			<button className="floating-button" onClick={() => window.location.href = '#contact'}>여행문의</button>
			<button className="scrollToTop" onClick={scrollToTop}>↑</button>
		</div>
	);
};

export default Main;