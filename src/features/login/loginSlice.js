import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  validToken: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
      state.validToken = true;
    },
    logout: (state) => {
      state.user = {}
      state.validToken = false
    }
  },
});

export const { setCurrentUser, logout } = loginSlice.actions;

export default loginSlice.reducer;
