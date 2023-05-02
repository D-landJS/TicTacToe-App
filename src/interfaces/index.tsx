export interface SquareProps {
	children?: string | boolean;
	isSelected?: boolean;
	isWinner?: boolean;
	updateBoard?: (index: number | undefined) => void;
	index?: number;
}

export interface WinnerModalProps {
	winner: string | boolean | null;
	resetGame: () => void;
}

export interface GameSectionProps {
	board: string[];
	updateBoard: (index: number | undefined) => void;
}

export interface saveGameData {
	board: string[];
	turn: string;
}
