import { saveGameData } from '../../interfaces';

export const saveGameStorage = ({ board, turn }: saveGameData) => {
	localStorage.setItem('board', JSON.stringify(board));
	localStorage.setItem('turn', JSON.stringify(turn));
};

export const resetGameStorage = () => {
	localStorage.removeItem('board');
	localStorage.removeItem('turn');
};
