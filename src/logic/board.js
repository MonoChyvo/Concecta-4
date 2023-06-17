/* eslint-disable no-unused-expressions */
import { WINNER_COMBOS } from "../components/constant"

export const checkWinner = (boardToCheck) => {
	for (const combo of WINNER_COMBOS) {
		const [a, b, c, d] = combo

		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c] &&
			boardToCheck[a] === boardToCheck[d]
		) {
			return boardToCheck[a]
		}
	}
	// * si no hay ganador
	return null
}

export const checkEndGame = (boardToCheck) => {
	return boardToCheck.every((square) => square !== null)
}