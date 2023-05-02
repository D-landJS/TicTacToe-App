import styled from 'styled-components';

export const CountersContainer = styled.section`
	display: flex;
	justify-content: center;
	margin: 15px auto;
	width: fit-content;
	position: relative;
	border-radius: 10px;
	gap: 1rem;

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.square {
		width: 70px;
		height: 70px;
		pointer-events: none;
		border-color: transparent;
	}

	.counter-turn {
		font-size: 4.5rem;
	}
`;
