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
		<div className={"container"}>
			<main className={"main"}>
				<div><INITIAL></INITIAL></div>
			</main>
			<button className="floating-button" >문의하기</button>
			<button className="scrollToTop" onClick={scrollToTop}>↑</button>
		</div>
	);
};

export default Main;