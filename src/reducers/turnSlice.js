import { createSlice } from "@reduxjs/toolkit";
import { TURNS } from '../components/constant'

const turnFromStorage = window.localStorage.getItem('turn')
const initialState = turnFromStorage ?? TURNS.x

export const turnSlice = createSlice({
	name: 'turn',
	initialState,
	reducers: {
		setTurn: (state, action) => action.payload
	}
})
export const { setTurn } = turnSlice.actions



//! Reducer
export const turnReducer = turnSlice.reducer