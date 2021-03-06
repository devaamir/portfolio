import React from "react";
import styled from "styled-components";

export default function () {
	return (
		<div>
			<Main>
				<Span1></Span1>
				<Span2></Span2>
				<Span3></Span3>
				<Spotlight>
					<Left>
						<Name>Sayed Muhammed Aamir</Name>
						<Profession>Web Developer</Profession>
						<AboutProf>
							Skills: html5, css, javascript, react js, jquery, bootstrap
						</AboutProf>
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
					</Left>
					<Right>
						<ImgContainer>
							<ProfileImg
								src={require("../assets/profile-img.jpeg").default}
								alt='profile-img'
							/>
						</ImgContainer>
					</Right>
					<SkillsList>
						<SkillItems>
							<SkillImg src='' alt='' />
						</SkillItems>
						<SkillItems>
							<SkillImg src='' alt='' />
						</SkillItems>
						<SkillItems>
							<SkillImg src='' alt='' />
						</SkillItems>
						<SkillItems>
							<SkillImg src='' alt='' />
						</SkillItems>
						<SkillItems>
							<SkillImg src='' alt='' />
						</SkillItems>
						<SkillItems>
							<SkillImg src='' alt='' />
						</SkillItems>
					</SkillsList>
				</Spotlight>
			</Main>
		</div>
	);
}

const Main = styled.section`
	background-image: linear-gradient(to bottom left, #2766da, #fff);
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
	filter: blur(3px);
	width: 250px;
	height: 250px;
	border-radius: 50%;
	top: 30px;
	left: 10px;
`;

const Span2 = styled.span`
	position: absolute;
	background: #cbdcf5;
	filter: blur(3px);
	width: 200px;
	height: 200px;
	border-radius: 50%;
	top: 100px;
	right: 20px;
`;

const Span3 = styled.span`
	position: absolute;
	background: #2766da;
	filter: blur(3px);
	width: 400px;
	height: 400px;
	border-radius: 50%;
	bottom: 30px;
	right: 100px;
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
	justify-content: space-between;
	padding: 50px 80px;
	box-sizing: border-box;
`;

const Left = styled.div`
	width: 45%;
	color: #314954;
`;

const Name = styled.h2`
	text-transform: uppercase;
	font-size: 80px;
	font-weight: 900;
`;

const Profession = styled.h3`
	text-transform: uppercase;
	font-size: 38px;
	font-weight: 900;
`;

const AboutProf = styled.p``;

const SocialLinks = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Twitter = styled.a`
	background: #00bedd;
	width: 22%;
	height: 100%;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	&:hover,
	:focus {
		border-radius: 10px;
	}
`;

const LinkedIn = styled.a`
	background: #0075a5;
	width: 22%;
	height: 100%;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	&:hover,
	:focus {
		border-radius: 10px;
	}
`;

const Github = styled.a`
	background: #ec456d;
	width: 22%;
	height: 100%;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	&:hover,
	:focus {
		border-radius: 10px;
	}
`;

const Facebook = styled.a`
	background: #32578b;
	width: 22%;
	height: 100%;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	&:hover,
	:focus {
		border-radius: 10px;
	}
`;

const IconImg = styled.img`
	width: 50%;
	height: 50%;
	fill: #fff;
`;

const Right = styled.div`
	width: 45%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
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
`;

const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

const SkillsList = styled.div`
	display: block;
	width: 700px;
	height: 700px;
	position: absolute;
	top: 0;
	right: 75px;
	bottom: 0;
	margin: auto 0;
`;

const SkillItems = styled.span`
	width: 50px;
	height: 50px;
	background: #574768;
	// display: flex;
	justify-content: center;
	align-items: center;
`;

const SkillImg = styled.img``;
