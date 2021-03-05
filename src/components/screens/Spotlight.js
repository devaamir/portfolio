import React from "react";
import styled from "styled-components";

export default function () {
	return (
		<div>
			<Main>
				<Span></Span>
				<Spotlight></Spotlight>
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

const Span = styled.span`
	position: absolute;
	background: #2766da;
	filter: blur(3px);
	width: 200px;
	height: 200px;
	border-radius: 50%;
	top: 30px;
	left: 10px;
`;

const Spotlight = styled.div`
	width: 90%;
	height: 80%;
	background: rgba(255, 255, 255, 0.5);
	box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	border-radius: 30px;
`;
