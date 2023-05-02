import { SquareStyled } from './Square.styled';
import { SquareProps } from '../interfaces';

export const Square = ({
	children,
	isSelected,
	updateBoard,
	index,
	isWinner,
}: SquareProps) => {
	const className = `${isSelected ? 'is-selected' : ''}`;

	const handleClick = () => {
		if (updateBoard) updateBoard(index);
	};

	return (
		<SquareStyled
			className={className}
			onClick={handleClick}
			isWinner={isWinner}
		>
			{children}
		</SquareStyled>
	);
};
