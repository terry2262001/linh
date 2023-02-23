const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
