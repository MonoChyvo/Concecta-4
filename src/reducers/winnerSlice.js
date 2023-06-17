import { createSlice } from "@reduxjs/toolkit";

export const winnerSlice = createSlice({
	name: 'winner',
	initialState: null,
	reducers: {
		setWinner: (state, action) => action.payload
	}
})
export const { setWinner } = winnerSlice.actions

//! Reducer
export const winnerReducer = winnerSlice.reducer