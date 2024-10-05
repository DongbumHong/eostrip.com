// Next.js React
'use client'
import '@_styles//globals.css'
import React from 'react'; 
import Link from 'next/link';

import Image from 'next/image';
import subImg3 from "@_images/sub/golfclub03.jpg";
import subImg4 from "@_images/sub/golfclub04.jpg";
import Img1 from "@_images/main/1859749_2.jpg";
import Img4 from "@_images/main/1932778_2.jpg";

const Promotion: React.FC = () => {
	return (
		<div id="promotion">			
			<div className="info">
				<div className="header_01">
					<h1>에오스 프로모션</h1>
					<p>이벤트와 할인이 가득!</p>
				</div>
				<div className="image-gallery">
					{/* <div className="image-container">
						<Image src={subImg1} alt="샘플 이미지 1"/>
						<div className="image-text">후쿠오카 시내 골프</div>
					</div> */}
					<div className="image-container">
						<Link href="./detail/promotion"><Image src={Img1} alt="샘플 이미지 2"/></Link>
						<div className="image-text">키타큐슈 시모노세키 여행</div>
					</div>
					<div className="image-container">
						<Link href="./detail/promotion"><Image src={subImg4} alt="샘플 이미지 3"/></Link>
						<div className="image-text">카고시마 그린힐 온천골프</div>
					</div>
					<div className="image-container">
						<Link href="./detail/promotion"><Image src={Img4} alt="샘플 이미지 4"/></Link>
						<div className="image-text">아소(阿蘇) 자유여행</div>
					</div>
					<div className="image-container">
						<Link href="./detail/promotion"><Image src={subImg3} alt="샘플 이미지 5"/></Link>
						<div id="premium" className="image-text">후쿠오카 VIP 명문 골프</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promotion;