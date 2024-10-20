import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface IHeader {
	isOpenMenu: boolean
}

const initialState: IHeader = {
	isOpenMenu: false
}

const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		toggleMenu: (state) => {
			state.isOpenMenu = !state.isOpenMenu
		}
	}
})

export default headerSlice.reducer
export const {toggleMenu} = headerSlice.actions
export const selectIsOpenMenu = (state: RootState) => state.headerReducer.isOpenMenu