// Next.js React
'use client'
import '@_styles//globals.css'
import React from 'react'; 
import { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";

import Image from 'next/image';
import mainImg1 from "@_images/main/np_main_10856.jpg";
import mainImg2 from "@_images/main/np_main_13783.jpg";
import mainImg3 from "@_images/main/np_main_13669.jpg";
import mainImg4 from "@_images/main/np_main_14199.jpg";
import mainImg5 from "@_images/main/np_main_14300.jpg";
import mainImg6 from "@_images/main/np_main_14309.jpg";

import Img1 from "@_images/main/1859749_2.jpg";
import Img2 from "@_images/main/1865675_2.jpg";
import Img3 from "@_images/main/1920299_2.jpg";
import Img4 from "@_images/main/1932778_2.jpg";
import Img5 from "@_images/main/1953128_2.jpg";
import Img6 from "@_images/main/1969201_2.jpg";

interface ImageInfo {
	url: string;
	url2: string;
	alt: string;
	title: string;
	description: string;
	detail1: string;
	detail2: string;
	detail3: string;
	detail4: string;
	detail5: string;
}

const images: ImageInfo[] = [
	{ url: mainImg1.src, url2: Img1.src, alt: 'Image 1', 
		title: '◆ 후쿠오카 시내 골프 ◆', 
		description: '다양한 코스를 즐길 수 있는 후쿠오카 시내 골프 여행', 
		detail1: '●후쿠오카 시내 숙박 골프 4일(72H)', 
		detail2: '・시내호텔, 명문 골프코스, 전일정 전용차량 및 한국인 드라이빙 가이드 안내. \n3박 4회 골프 라운드 요금으로 항공 일정 상 골프 3회 시 요금의 하향 변동이 있습니다. 문의 바랍니다.', 
		detail3: '・★ 상품가는 100엔=900원 기준으로 계산되었습니다. 급격한 환율변동시 상품가 조정됩니다. ★', 
		detail4: '※​ 호텔 싱글차지 1인1박당 19,000~21,500엔', 
		detail5: '※​ 2인플레이 추가 금액 5000엔(18홀/1인), 3인 플레이 추가금액 1000엔(18홀/1인)' },
	{ url: mainImg2.src, url2: Img2.src, alt: 'Image 2', 
		title: '◆ 카고시마 케도인 온천골프 ◆', 
		description: '다양한 코스를 즐길 수 있는 일본 카고시마 케도인 온천골프 여행', 
		detail1: '●★항공제외특가★ 케도인(祁答院) 리조트 4일', 
		detail2: '・일본 남자프로 개막전"토오켄 코퍼레이션 컵"이 개최 된 가고시마 제일의 명문코스. \n그리고 숲과 호반이 어우러진 호텔과 온천. 최상의 리조트 골프의 진수를 만끽하실 수 있습니다.', 
		detail3: '※한 겨울에도 페어웨이는 양잔디로 되어 있어 푸른 필드위에서의 라운딩을 만끽 하실 수 있습니다.', 
		detail4: '※​ 호텔 싱글차지 1인1박당 19,000~21,500엔', 
		detail5: '※​ 2인플레이 추가 금액 5000엔(18홀/1인), 3인 플레이 추가금액 1000엔(18홀/1인)' },
	{ url: mainImg3.src, url2: Img3.src, alt: 'Image 3', 
		title: '◆ 카고시마그린힐 온천골프 ◆', 
		description: '다양한 코스를 즐길 수 있는 일본 카고시마그린힐 온천골프 여행', 
		detail1: '●후쿠오카 센츄리 골프 4일[센츄리 G.C 內 럭셔리 온천료칸 水雲亭 숙박] -(72H)', 
		detail2: '・후쿠오카 명문 골프장 센츄리 G.C 경내에 위치한 럭셔리 온천료칸 Sui un tei(水雲亭) Open! \n후쿠오카 센츄리 G.C 경내에 위치한 럭셔리 온천료칸 水雲亭 전 객실 천연 온천탕이 딸린 64㎡ 규모의 ​디럭스룸 숙박입니다.', 
		detail3: '・★ 상품가는 100엔=900원 기준으로 계산되었습니다. 급격한 환율변동시 상품가 조정됩니다. ★', 
		detail4: '※​ 호텔 싱글차지 1인1박당 19,000~21,500엔', 
		detail5: '※​ 2인플레이 추가 금액 5000엔(18홀/1인), 3인 플레이 추가금액 1000엔(18홀/1인)' },
	{ url: mainImg4.src, url2: Img4.src, alt: 'Image 4', 
		title: '◆ 후쿠오카 센츄리 골프 ◆', 
		description: '다양한 코스를 즐길 수 있는 일본 후쿠오카 센츄리골프 여행', 
		detail1: '●후쿠오카 센츄리 골프 4일[센츄리 G.C 內 럭셔리 온천료칸 水雲亭 숙박] -(72H)', 
		detail2: '・후쿠오카 명문 골프장 센츄리 G.C 경내에 위치한 럭셔리 온천료칸 Sui un tei(水雲亭) Open! \n후쿠오카 센츄리 G.C 경내에 위치한 럭셔리 온천료칸 水雲亭 전 객실 천연 온천탕이 딸린 64㎡ 규모의 ​디럭스룸 숙박입니다.', 
		detail3: '・★ 상품가는 100엔=900원 기준으로 계산되었습니다. 급격한 환율변동시 상품가 조정됩니다. ★', 
		detail4: '※​ 호텔 싱글차지 1인1박당 19,000~21,500엔', 
		detail5: '※​ 2인플레이 추가 금액 5000엔(18홀/1인), 3인 플레이 추가금액 1000엔(18홀/1인)' },
	{ url: mainImg5.src, url2: Img5.src, alt: 'Image 5', 
		title: '◆ 후쿠오카 VIP 명문 골프 ◆', 
		description: '다양한 코스를 즐길 수 있는 일본 쿠오카 VIP 명문 골프 여행', 
		detail1: '●후쿠오카 VIP 명문 골프 4일(72H)', 
		detail2: '・특급호텔, 명문 골프코스, 전일정 전용차량 및 한국인 드라이빙 가이드 안내. \n 3박 4회 골프 라운드 요금으로 항공 일정 상 골프 3회 시 요금의 하향 변동이 있습니다. 문의 바랍니다.', 
		detail3: '・★ 상품가는 100엔=900원 기준으로 계산되었습니다. 급격한 환율변동시 상품가 조정됩니다. ★', 
		detail4: '※​ 호텔 싱글차지 1인1박당 19,000~21,500엔', 
		detail5: '※​ 2인플레이 추가 금액 5000엔(18홀/1인), 3인 플레이 추가금액 1000엔(18홀/1인)' },
	{ url: mainImg6.src, url2: Img6.src, alt: 'Image 6', 
		title: '◆ 아소(阿蘇)그랑비리오 골프 ◆', 
		description: '다양한 코스를 즐길 수 있는 아소(阿蘇)그랑비리오 골프 여행', 
		detail1: '●[ ★구마모토직항 ★] 아소(阿蘇)그랑비리오 골프 4일(54H)-토 출발', 
		detail2: '・아소 활화산 초입에 자리잡은 골프 리조트로 아놀드 파머가 설계한 36홀의 코스를 가지고 있습니다. \n호텔, 골프, 온천 모두 만족하실 수 있는 좋은 상품입니다. 특히 온천은 활화산의 영향을 받아 수질이 좋고인기가 높습니다.  ', 
		detail3: '・★ 상품가는 100엔=900원 기준으로 계산되었습니다. 급격한 환율변동시 상품가 조정됩니다. ★', 
		detail4: '※​ 호텔 싱글차지 1인1박당 19,000~21,500엔', 
		detail5: '※​ 2인플레이 추가 금액 5000엔(18홀/1인), 3인 플레이 추가금액 1000엔(18홀/1인)' },
];

const InitialPage: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null);
	const sliderRef = useRef<Slider | null>(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (current: number) => setCurrentIndex(current),
		autoplay: true,
		autoplaySpeed: 5000, // 5초마다 슬라이드
		responsive: [
			{
				breakpoint: 768, // 768px 이하에서
				settings: {
					slidesToShow: 1, // 슬라이드 1개 표시
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024, // 1024px 이하에서
				settings: {
					slidesToShow: 1, // 슬라이드 1개 표시
					slidesToScroll: 1,
				},
			},
			// 추가적인 브레이크포인트 설정 가능
		],
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (sliderRef.current) {
				sliderRef.current.slickNext();
			}
		}, 5000); // 5초 간격
		return () => clearInterval(interval);
	}, []);

	const handleImageClick = (image: ImageInfo) => {
		setSelectedImage(image);
	};
	
	return (
		<div >
			<div className="slider">
				<Slider ref={sliderRef} {...settings}>
					{images.map((image, index) => (
						<div
							key={index}
							style={{ position: "relative", height: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }} // 슬라이드 중앙 정렬
							onClick={() => handleImageClick(image)}
						>
							<Image
								src={image.url}
								alt={image.title}
								layout="intrinsic"
								width={1280}
								height={600}
								objectFit="contain"
								style={{ maxWidth: '100%', height: 'auto' }} // 반응형으로 설정
							/>
							<div className="image-overlay">
								<h3>{image.title}</h3>
								<p>{image.description}</p>
							</div>
						</div>
					))}
				</Slider>
				{selectedImage && (
					<div className="info">
						<h2>{selectedImage.title}</h2>
						<p>{selectedImage.description}</p>
						<Image
							src={selectedImage.url2}
							alt={selectedImage.title}
							layout="intrinsic" // 원본 크기에 맞게 이미지 조정
							width={700} // 원본 이미지의 너비
							height={4500} // 원본 이미지의 높이
							objectFit="contain" // 비율 유지
							style={{ maxWidth: '100%', height: 'auto' }} // 반응형으로 설정
						/>
						<h2>{selectedImage.detail1}</h2>
						<p>{selectedImage.detail2}</p>
						<p>{selectedImage.detail3}</p>
						<p>{selectedImage.detail4}</p>
						<p>{selectedImage.detail5}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default InitialPage;