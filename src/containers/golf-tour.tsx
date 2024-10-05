// Next.js React
'use client'
import '@_styles//globals.css'
import React from 'react'; 
import Link from 'next/link';

import Image from 'next/image';
import subImg1 from "@_images/sub/golfclub01.jpg";
import subImg2 from "@_images/sub/golfclub02.jpg";
import subImg4 from "@_images/sub/golfclub04.jpg";
import subImg5 from "@_images/sub/golfclub05.jpg";

const GolfToru: React.FC = () => {
	return (
		<div>			
			<div className="info">
				<div className="header_01">
					<h1>골프투어</h1>
					<p>다양한 코스를 즐길 수 있는 일본 골프여행</p>
				</div>
				<div className="image-gallery">
					<div className="image-container">
						<Link href="./detail/golf"><Image src={subImg1} alt="샘플 이미지 1"/></Link>
						<div className="image-text">아소(阿蘇)그랑비리오 골프</div>
					</div>
					<div className="image-container">
						<Link href="./detail/golf"><Image src={subImg2} alt="샘플 이미지 2"/></Link>
						<div className="image-text">후쿠오카 센츄리 골프</div>
					</div>
					<div className="image-container">
						<Link href="./detail/golf"><Image src={subImg5} alt="샘플 이미지 3"/></Link>
						<div className="image-text">카고시마 케도인 온천골프</div>
					</div>
					{/* <div className="image-container">
						<Image src={subImg1} alt="샘플 이미지 4"/>
						<div className="image-text">후쿠오카 시내 골프</div>
					</div> */}
					<div className="image-container">
						<Link href="./detail/golf"><Image src={subImg4} alt="샘플 이미지 5"/></Link>
						<div id="kyushu-tour" className="image-text">카고시마 그린힐 온천골프</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GolfToru;