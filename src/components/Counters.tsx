import { FC } from 'react';
import { TURNS } from '../constants';
import { Square } from './Square';
import { CountersContainer } from './CounterSection.styled';

type CountersProps = {
	countX: number;
	countY: number;
	turn: string;
};

export const Counters: FC<CountersProps> = ({ countX, countY, turn }) => {
	return (
		<CountersContainer>
			<div className={`wrapper ${turn === TURNS.X ? 'selected' : ''}`}>
				<Square isWinner={true} isSelected={turn === TURNS.X}>
					{TURNS.X}
				</Square>
				<h2 className="counter-turn">{countX}</h2>
			</div>
			<div className={`wrapper ${turn === TURNS.O ? 'selected' : ''}`}>
				<Square isWinner={true} isSelected={turn === TURNS.O}>
					{TURNS.O}
				</Square>
				<h2 className="counter-turn">{countY}</h2>
			</div>
		</CountersContainer>
	);
};
