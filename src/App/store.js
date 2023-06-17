import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "../reducers/boardSlice";
import { turnReducer } from "../reducers/turnSlice";
import { winnerReducer } from "../reducers/winnerSlice";

export const store = configureStore({
	reducer: {
		board: boardReducer,
		turn: turnReducer,
		winner: winnerReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
})
