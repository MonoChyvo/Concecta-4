/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { Square } from './Square'
import { setBoard } from '../reducers/boardSlice'
import { TURNS } from './constant'
import { setTurn } from '../reducers/turnSlice'
import { checkEndGame, checkWinner } from '../logic/board'
import confetti from 'canvas-confetti'
import { setWinner } from '../reducers/winnerSlice'

export const Board = ({ resetGame }) => {
	const dispatch = useDispatch()
	const board = useSelector((state) => state.board)
	const turn = useSelector((state) => state.turn)
	const winner = useSelector((state) => state.winner)

	const updateBoard = (index) => {
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn
		dispatch(setBoard(newBoard)).payload

		const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
		dispatch(setTurn(newTurn)).payload

		window.localStorage.setItem('board', JSON.stringify(newBoard))
		window.localStorage.setItem('turn', newTurn)

		const newWinner = checkWinner(newBoard)
		if (newWinner) {
			confetti()
			dispatch(setWinner(newWinner))
		} else if (checkEndGame(newBoard)) {
			dispatch(setWinner(false))
		}
	}

	return (
		<>
			<section className='game'>
				{board.map((square, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{square}
						</Square>
					)
				})}
			</section>

			<section className='turn'>
				<Square isSelected={turn === TURNS.x} updateBoard={updateBoard}>
					{TURNS.x}
				</Square>
				<button onClick={resetGame}>Resetear juego</button>
				<Square isSelected={turn === TURNS.o} updateBoard={updateBoard}>
					{TURNS.o}
				</Square>
			</section>
		</>
	)
}
