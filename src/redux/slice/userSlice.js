const { createSlice, createAction } = require("@reduxjs/toolkit");
const initialState = {
  profile: "",
  carts: [],
};
export const setProfile = createAction("setProfile");
export const setCart = createAction("setCart");
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setProfile, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(setCart, (state, action) => {
        state.carts = action.payload;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
