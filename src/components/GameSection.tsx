import { FC } from 'react';
import { Square } from './Square';
import { GameSectionProps } from '../interfaces';
import { GameSectionWrapper } from './GameSection.styled';

export const GameSection: FC<GameSectionProps> = ({ board, updateBoard }) => {
	return (
		<GameSectionWrapper>
			{board.map((square: string, index: number) => {
				return (
					<Square key={index} index={index} updateBoard={updateBoard}>
						{square}
					</Square>
				);
			})}
		</GameSectionWrapper>
	);
};
