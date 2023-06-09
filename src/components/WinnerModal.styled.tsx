import styled from 'styled-components';

export const WinnerSection = styled.section`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.7);

	.text {
		background: #111;
		height: 300px;
		width: 320px;
		border: 2px solid #eee;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	.win {
		margin: 0 auto;
		width: fit-content;
		border: 2px solid #eee;
		border-radius: 10px;
		display: flex;
		gap: 15px;
	}

	.draw {
		font-size: 48px;
	}
`;
