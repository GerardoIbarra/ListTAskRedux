import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: 'Counter',
    initialstate: {
        counter: 0,
    },
    reducer: {
        increment: (state, action) => {
            state.counter = state.counter + 1;
        },
        decrement: (state, action) => {
            if (state.counter > 0) {
                state.counter = state.counter + 1;

            }
        },
    }

})

export const { increment, decrement } = counterSlice.actions;
export const Counter = state => state.counter;
export default counterSlice.reducer;