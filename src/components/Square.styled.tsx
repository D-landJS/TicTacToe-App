import styled, { css } from 'styled-components';
interface SquareStyledProps {
	isWinner?: boolean;
}
export const SquareStyled = styled.div<SquareStyledProps>`
	width: 100px;
	height: 100px;
	border: 2px solid #eee;
	border-radius: 5px;
	display: grid;
	place-items: center;
	cursor: pointer;
	font-size: 48px;

	&.is-selected {
		color: #fff;
		background: #09f;
	}

	${props =>
		props.isWinner &&
		css`
			width: 70px;
			height: 70px;
			pointer-events: none;
			border-color: transparent;
		`}
`;
