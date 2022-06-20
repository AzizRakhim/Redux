import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {counter : 0, name : 'Javohir', showCounter : true};

const counterSlice = createSlice({
  name : "counter",
  initialState,
  reducers : {
    decrement(state) {
      state.counter--
    },
    increment(state, action) {
      state.counter += action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
      state.counter = 0;
    }
  }
})

const store = configureStore({
  reducer : { counter : counterSlice.reducer }
});

export const counterActions = counterSlice.actions;

export default store; 

