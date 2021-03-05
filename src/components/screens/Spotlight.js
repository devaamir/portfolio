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
	background-image: linear-gradient(to bottom left, #91a6cd, #fff);
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Span = styled.span`
	position: absolute;
	background: #ff0000;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	top: 30px;
	left: 10px;
`;

const Spotlight = styled.div`
	width: 90%;
	height: 80%;
	background: #fff;
	box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
	// filter: blur(4px);
	backdrop-filter: opacity(0.5);
	border-radius: 30px;
`;
