import { createSlice } from "@reduxjs/toolkit";

const boardFromStorage = window.localStorage.getItem('board');
const initialState = boardFromStorage ? JSON.parse(boardFromStorage) : Array(42).fill(null)

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		setBoard: (state, action) => action.payload
	}
})
export const { setBoard } = boardSlice.actions

//! Reducer
export const boardReducer = boardSlice.reducer