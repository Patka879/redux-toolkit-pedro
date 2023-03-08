import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const colorSlice = createSlice({
    name: 'color',
    initialState: {value : initialState},
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        }
    }
})

export default colorSlice.reducer
export const { changeColor } = colorSlice.actions