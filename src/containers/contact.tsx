// Next.js React
'use client'
import '@_styles//globals.css'
import React from 'react'; 
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import kakao from "@_images/sns/kakao.jpg";
import line from "@_images/sns/line.jpg";
import instar from "@_images/sns/instar.jpg";
import facebook from "@_images/sns/facebook.jpg";
import youtube from "@_images/sns/youtube.jpg";

const CONTACT: React.FC = () => {
		const contactRef = useRef(null);

	return (
		<div>			
			<div className="full-width-group">
				<div className="content-wrapper">
					<div className="spacer contact-container"></div>
					<h1>여행문의</h1>
					<div className="columns">
						<div className="column left-align contact-container" >
							<div>
								<h3>에오스 골프투어</h3>
								<p>
									골프 여행의 모든 것<br />
									채팅/전화상담 가능 <br /><br />
									대표전화<br />+81-92-285-2430<br /><br />
									Mobile<br />+81-90-3327-9397<br />
								</p>
							</div>
						</div>
						<div className="column contact-form contact-container">
							<div className="spacer-large">
								<form className="contact-form">
									<div className="name-fields"> {/* 이름 입력 필드들을 감싸는 div */}
										<div className="form-group half-width">
											<label>성 (필수)</label>
											<input type="text" name="first-name" required className="input-field" />
										</div>
										<div className="form-group half-width">
											<label>명 (필수)</label>
											<input type=" contact-formtext" name="last-name" required className="input-field" />
										</div>
									</div>
									<div className="form-group">
										<label>이메일 (필수)</label>
										<input type="email" name="email" required className="input-field" />
									</div>
									<div className="form-group">
										<label>내용</label>
										<textarea name="message" rows={4} className="input-field" />
									</div>
									<button type="submit" className="submit-button">보내기</button>
								</form>
							</div>
						</div>
					</div>
				</div><br /><br />
				<div className="left-align">
					<ul className="ftr_social">
						<li><a href="https://story.kakao.com/ch/verygoodtour" target="_blank" className="f_kakao"><Image src={kakao} alt="kakao"/></a></li>
						<li><a href="https://blog.naver.com/vgt0901" target="_blank" className="f_pinter"><Image src={line} alt="line"/></a></li>
						<li><a href="https://www.instagram.com/verygoodtour_official" target="_blank" className="f_facebook"><Image src={instar} alt="instar"/></a></li>
						<li><a href="https://www.facebook.com/verygoodtour" target="_blank" className="f_insta"><Image src={facebook} alt="facebook"/></a></li>
						<li><a href="https://www.youtube.com/user/verygoodtourofficial" target="_blank" className="f_blog"><Image src={youtube} alt="youtube"/></a></li>
					</ul>
				</div>

				<div className="spacer-large" ></div>

				{/* Fullwidth Map */}
				<div className="map-wrapper">
					<iframe
						title="Fukuoka, Hakata"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0123453452315!2d130.4218392!3d33.5903549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541f1a3f738ff79%3A0x79f80d9c0a3ae520!2z44CSODEwLTAwMjQg5p2x5Lqs6YO95ZOB5bed5bSO5biC6I2J5Yy65pel5aSn77yT5LiB55uu77yZ4oiS77yW!5e0!3m2!1sko!2sjp!4v1635640027743!5m2!1sko!2sjp&z=17&markers=33.5903549,130.4218392"
						width="100%"
						height="600"
						allowFullScreen={true}
						loading="lazy">
					</iframe>
				</div>
			</div>
		</div>
	);
};

export default CONTACT;