/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux'
import { setBoard } from './reducers/boardSlice'
import { setTurn } from './reducers/turnSlice'
import { setWinner } from './reducers/winnerSlice'
import { TURNS } from './components/constant'
import { Winner } from './components/Winner'
import { Board } from './components/Board'

// todo: agregar el audio de los grunts en modo fiesta, cuando alguien gana.

export const App = () => {
	const dispatch = useDispatch()
	const winner = useSelector((state) => state.winner)

	const resetGame = () => {
		dispatch(setBoard(Array(42).fill(null)))
		dispatch(setTurn(TURNS.x))
		dispatch(setWinner(null))

		window.localStorage.removeItem('board')
		window.localStorage.removeItem('turn')
	}

	return (
		<main className='board'>
			<Board resetGame={resetGame} />
			<Winner winner={winner} resetGame={resetGame} />
		</main>
	)
}
