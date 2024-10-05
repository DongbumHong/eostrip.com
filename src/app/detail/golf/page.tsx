// Next.js React
'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
// utils 
import PROMOTION from "@_containers/detail/golf-detail";
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
		<div>
			<main className="main">
				<div><PROMOTION></PROMOTION></div>
			</main>
		</div>
	);
};

export default Main;