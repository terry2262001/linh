const { createSlice, createAction } = require("@reduxjs/toolkit");
const initialState = {
  profile: "",
};
export const setProfile = createAction("setProfile");
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setProfile, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
