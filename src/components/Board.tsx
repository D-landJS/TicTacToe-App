import { useCallback, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { TURNS } from '../constants';

import { checkWinner, checkEndGame } from '../utils/gameLogic/board';
import { WinnerModal } from '../components/WinnerModal';
import { resetGameStorage, saveGameStorage } from '../utils/storage';
import { Counters } from '../components/Counters';
import { GameSection } from '../components/GameSection';

const Board = () => {
	const [board, setBoard] = useState(() => {
		const boardFromStorage = localStorage.getItem('board');
		return boardFromStorage
			? JSON.parse(boardFromStorage)
			: Array(9).fill(null);
	});

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = localStorage.getItem('turn');
		return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X;
	});

	const [winner, setWinner] = useState<string | null | boolean>(null);

	const [countX, setCountX] = useState(() => {
		const countXFromStorage = localStorage.getItem('countX');
		return countXFromStorage ? parseInt(countXFromStorage) : 0;
	});

	const [countY, setCountY] = useState(() => {
		const countYFromStorage = localStorage.getItem('countY');
		return countYFromStorage ? parseInt(countYFromStorage) : 0;
	});

	const updateBoard = useCallback(
		(index: number | undefined) => {
			if (index === undefined || board[index] || winner) return;

			const newBoard: Array<string> = [...board];

			newBoard[index] = turn;

			setBoard(newBoard);

			const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
			setTurn(newTurn);

			saveGameStorage({
				board: newBoard,
				turn: newTurn,
			});

			const newWinner = checkWinner(newBoard);

			if (newWinner) {
				setWinner(newWinner);

				if (newWinner === TURNS.X) {
					setCountX(countX + 1);
				} else {
					setCountY(countY + 1);
				}
				confetti();
			} else if (checkEndGame(newBoard)) {
				setWinner(false);
			}
		},
		[board, countX, countY, turn, winner]
	);
	useEffect(() => {
		localStorage.setItem('countX', JSON.stringify(countX));
		localStorage.setItem('countY', JSON.stringify(countY));
	}, [countX, countY]);

	const startNewGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(TURNS.X);
		setWinner(null);
		setCountX(0);
		setCountY(0);

		resetGameStorage();
		localStorage.removeItem('countX');
		localStorage.removeItem('countY');
	};

	const resetGame = () => {
		setBoard(Array(9).fill(null));
		setTurn(TURNS.X);
		setWinner(null);

		resetGameStorage();
	};

	return (
		<>
			<main className="board">
				<h1>Tic tac toe</h1>
				<button onClick={startNewGame}>Start a new game</button>
				<button onClick={resetGame}>Restart the game</button>

				<GameSection board={board} updateBoard={updateBoard} />

				<Counters turn={turn} countX={countX} countY={countY} />

				<WinnerModal resetGame={resetGame} winner={winner} />
			</main>
		</>
	);
};

export default Board;
