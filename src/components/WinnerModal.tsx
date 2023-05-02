import { FC } from 'react';
import { Square } from './Square';
import { WinnerModalProps } from '../interfaces';
import { WinnerSection } from './WinnerModal.styled';

export const WinnerModal: FC<WinnerModalProps> = ({ winner, resetGame }) => {
	if (winner === null) return null;
	const winnerText = winner === false ? 'Draw❗' : 'Won❗';

	return (
		<WinnerSection>
			<div className="text">
				<h2>{winnerText}</h2>

				{winner ? (
					<header className="win">
						<Square isWinner={true}>{winner}</Square>
					</header>
				) : (
					<header className="draw">👻</header>
				)}

				<footer>
					<button onClick={resetGame}>Restart the game</button>
				</footer>
			</div>
		</WinnerSection>
	);
};
