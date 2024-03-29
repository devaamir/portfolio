import React, { useState } from "react";
import HelmetExport from "react-helmet";
import styled from "styled-components";

export default function () {
	const [skills] = useState([
		{
			id: 1,
			img: require("../assets/html5.svg"),
		},
		{
			id: 2,
			img: require("../assets/css3.svg"),
		},
		{
			id: 3,
			img: require("../assets/js.svg"),
		},
		{
			id: 4,
			img: require("../assets/react.svg"),
		},
		{
			id: 5,
			img: require("../assets/bootstrap.svg"),
		},
	]);

	// onHover(e) => {
	// 	console.log("hi")
	// }

	return (
		<div>
			<HelmetExport>
				<title>Sayed Muhammed Aamir | Web Developer</title>
			</HelmetExport>
			<Main>
				<Span1>
					{/* <img src={require("../assets/instagram.svg").default} alt='' /> */}
				</Span1>
				<Span2></Span2>
				<Span3></Span3>
				<Spotlight>
					<Left>
						<Name>
							<FirstName>Sayed Muhammed</FirstName>Aamir
						</Name>
						<Profession>UI Engineer</Profession>
						<SkillsList>
							{skills.map((skill) => (
								<SkillItems key={skill.id}>
									<SkillImg src={skill.img.default} alt='skills' />
								</SkillItems>
							))}
						</SkillsList>
					</Left>
					<Right>
						<ImgContainer>
							<ProfileImg
								src={require("../assets/profile-img.jpeg").default}
								alt='profile-img'
							/>
						</ImgContainer>
						<SocialLinks>
							<Twitter href='https://twitter.com/SayedMuhammedA5'>
								<IconImg
									src={require("../assets/twitter.svg").default}
									alt='twitter'
								/>
							</Twitter>
							<LinkedIn href='https://www.linkedin.com/in/sayed-aamir-a0560a18a/'>
								<IconImg
									src={require("../assets/linkedin.svg").default}
									alt='linkedin'
								/>
							</LinkedIn>
							<Github href='https://github.com/devaamir/'>
								<IconImg
									src={require("../assets/github.svg").default}
									alt='github'
								/>
							</Github>
							<Facebook href='https://www.facebook.com'>
								<IconImg
									src={require("../assets/facebook.svg").default}
									alt='facebook'
								/>
							</Facebook>
						</SocialLinks>
					</Right>
				</Spotlight>
			</Main>
		</div>
	);
}

const Main = styled.section`
	background-image: linear-gradient(to bottom left, #bacbea, #2766da);
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Span1 = styled.span`
	position: absolute;
	background: #2766da;
	filter: blur(2px);
	width: 250px;
	height: 250px;
	border-radius: 50%;
	top: 30px;
	left: 10px;
	animation: vibrate-1 5s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;
	@keyframes vibrate-1 {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-4px, 4px);
		}
		40% {
			transform: translate(-3px, -7px);
		}
		60% {
			transform: translate(4px, 4px);
		}
		80% {
			transform: translate(9px, -8px);
		}
		100% {
			transform: translate(0);
		}
	}
	@media all and (max-width: 768px) {
		width: 150px;
		height: 150px;
		top: 100px;
		animation: vibrate-2 7s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;
	}
`;

const Span2 = styled.span`
	position: absolute;
	background: #cbdcf5;
	filter: blur(2px);
	width: 200px;
	height: 200px;
	border-radius: 50%;
	top: 100px;
	right: 20px;
	animation: vibrate-2 4s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;
	@keyframes vibrate-2 {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-2px, 6px);
		}
		40% {
			transform: translate(6px, -4px);
		}
		60% {
			transform: translate(-4px, -6px);
		}
		80% {
			transform: translate(-2px, 6px);
		}
		100% {
			transform: translate(0);
		}
	}
	@media all and (max-width: 768px) {
		width: 100px;
		height: 100px;
		top: 100px;
		animation: vibrate-2 6s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;
	}
`;

const Span3 = styled.span`
	position: absolute;
	background: #2766da;
	filter: blur(2px);
	width: 400px;
	height: 400px;
	border-radius: 50%;
	bottom: 30px;
	right: 100px;
	animation: vibrate-3 6s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;
	@keyframes vibrate-3 {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-4px, 4px);
		}
		40% {
			transform: translate(-3px, -7px);
		}
		60% {
			transform: translate(4px, 4px);
		}
		80% {
			transform: translate(9px, -8px);
		}
		100% {
			transform: translate(0);
		}
	}
	@media all and (max-width: 768px) {
		width: 300px;
		height: 300px;
		bottom: 100px;
		right: 30px;
		animation: vibrate-2 8s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;
	}
`;

const Spotlight = styled.div`
	width: 90%;
	// height: 80%;
	background: rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	border-radius: 30px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 50px 80px;
	box-sizing: border-box;
	@media all and (max-width: 1200px) {
		padding: 30px 50px;
	}
	@media all and (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const Left = styled.div`
	width: 40%;
	color: #314954;
	@media all and (max-width: 1200px) {
		width: 45%;
	}
	@media all and (max-width: 768px) {
		width: 70%;
	}
`;

const Name = styled.h2`
	text-transform: uppercase;
	font-size: 80px;
	font-weight: 900;
	@media all and (max-width: 1200px) {
		font-size: 70px;
	}
	@media all and (max-width: 980px) {
		font-size: 50px;
	}
	@media all and (max-width: 768px) {
		width: 100%;
		text-align: center;
	}
`;

const FirstName = styled.h2`
	font-size: 40px;
	font-weight: 400;
	@media all and (max-width: 1200px) {
		font-size: 30px;
	}
	@media all and (max-width: 980px) {
		font-size: 20px;
	}
	@media all and (max-width: 480px) {
		font-size: 16px;
		text-align: center;
	}
`;

const Profession = styled.h3`
	text-transform: uppercase;
	font-size: 38px;
	margin: 30px 0;
	font-weight: 500;
	@media all and (max-width: 1200px) {
		font-size: 30px;
	}
	@media all and (max-width: 1200px) {
		font-size: 20px;
		margin: 20px 0;
	}
	@media all and (max-width: 1200px) {
		width: 100%;
		text-align: center;
	}
	@media all and (max-width: 480px) {
		font-size: 16px;
	}
`;

// const AboutProf = styled.p``;

const Right = styled.div`
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	@media all and (max-width: 1200px) {
		width: 45%;
	}
	@media all and (max-width: 768px) {
		width: 70%;
		flex-direction: column;
	}
`;

const ImgContainer = styled.span`
	width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	box-shadow: 0 0 20px 0 rgba(0, 0, 108, 0.2);
	overflow: hidden;
	padding: 10px;
	margin-right: 30px;
	@media all and (max-width: 1520px) {
		width: 300px;
		height: 300px;
	}
	@media all and (max-width: 1200px) {
		width: 280px;
		height: 280px;
	}
	@media all and (max-width: 980px) {
		width: 200px;
		height: 200px;
	}
	@media all and (max-width: 768px) {
		margin-right: 0px;
		margin: 30px 0;
	}
	@media all and (max-width: 480px) {
		margin: 20px 0;
	}
`;

const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

const SocialLinks = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media all and (max-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
`;

const Twitter = styled.a`
	background: #00bedd;
	width: 70px;
	height: 70px;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-bottom: 20px;
	&:hover,
	:focus {
		border-radius: 10px;
		img {
			width: 50%;
			height: 50%;
		}
	}
	@media all and (max-width: 980px) {
		width: 50px;
		height: 50px;
	}
	@media all and (max-width: 480px) {
		width: 30px;
		height: 30px;
	}
`;

const LinkedIn = styled.a`
	background: #0075a5;
	width: 70px;
	height: 70px;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-bottom: 20px;
	&:hover,
	:focus {
		border-radius: 10px;
		img {
			width: 50%;
			height: 50%;
		}
	}
	@media all and (max-width: 980px) {
		width: 50px;
		height: 50px;
	}
	@media all and (max-width: 480px) {
		width: 30px;
		height: 30px;
	}
`;

const Github = styled.a`
	background: #ec456d;
	width: 70px;
	height: 70px;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-bottom: 20px;
	&:hover,
	:focus {
		border-radius: 10px;
		img {
			width: 50%;
			height: 50%;
		}
	}
	@media all and (max-width: 980px) {
		width: 50px;
		height: 50px;
	}
	@media all and (max-width: 480px) {
		width: 30px;
		height: 30px;
	}
`;

const Facebook = styled.a`
	background: #32578b;
	width: 70px;
	height: 70px;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-bottom: 20px;
	&:hover,
	:focus {
		border-radius: 10px;
		img {
			width: 50%;
			height: 50%;
		}
	}
	@media all and (max-width: 980px) {
		width: 50px;
		height: 50px;
	}
	@media all and (max-width: 480px) {
		width: 30px;
		height: 30px;
	}
`;

const IconImg = styled.img`
	width: 30%;
	height: 30%;
	fill: #fff;
`;

const SkillsList = styled.div`
	width: 100%;
	display: flex;
	justify-content: left;
	align-items: center;
	margin-top: 100px;
	@media all and (max-width: 1200px) {
		margin-top: 70px;
	}
	@media all and (max-width: 980px) {
		margin-top: 30px;
	}
	@media all and (max-width: 480px) {
		margin-top: 10px;
	}
`;

const SkillItems = styled.span`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 30px;
	&:hover,
	:focus {
		background: #fff;
		border-radius: 10px;
		padding: 10px;
		img {
			filter: none;
		}
	}
	@media all and (max-width: 980px) {
		margin-right: 20px;
	}
	@media all and (max-width: 480px) {
		margin-right: 10px;
	}
`;

const SkillImg = styled.img`
	width: 100%;
	height: 100%;
	filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%)
		contrast(0%);
	&:hover,
	:focus {
		filter: none;
	}
`;
