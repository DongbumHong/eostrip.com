// Next.js React
'use client'
import '@_styles//globals.css'
import React from 'react'; 
import Link from 'next/link';

import Image from 'next/image';
import Img1 from "@_images/main/1859749_2.jpg";
import Img2 from "@_images/main/1865675_2.jpg";
import Img3 from "@_images/main/1920299_2.jpg";
import Img4 from "@_images/main/1932778_2.jpg";
import Img5 from "@_images/main/1953128_2.jpg";
import Img6 from "@_images/main/1969201_2.jpg";

const KyushuTour: React.FC = () => {
	return (
		<div>			
			<div className="info">
				<div className="header_01">
					<h1>큐슈관광</h1>
					<p>편안하게 즐길 수 있는 큐수여행</p>
				</div>
				<div className="image-gallery">
					<div className="image-container">
						<Link href="./detail/kyushu"><Image src={Img1} alt="샘플 이미지 1"/></Link>
						<div className="image-text">키타큐슈 시모노세키 식도락 여행</div>
					</div>
					<div className="image-container">
						<Link href="./detail/kyushu"><Image src={Img2} alt="샘플 이미지 2"/></Link>
						<div className="image-text">카고시마 온천여행</div>
					</div>
					<div className="image-container">
						<Link href="./detail/kyushu"><Image src={Img3} alt="샘플 이미지 3"/></Link>
						<div className="image-text">쿠마모토 온천여행</div>
					</div>
					{/* <div className="image-container">
						<Image src={Img4} alt="샘플 이미지 4"/>
						<div className="image-text">후쿠오카 시내 골프</div>
					</div> */}
					<div className="image-container">
						<Link href="./detail/kyushu"><Image src={Img4} alt="샘플 이미지 5"/></Link>
						<div id="contact" className="image-text">아소(阿蘇) 자유여행</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KyushuTour;