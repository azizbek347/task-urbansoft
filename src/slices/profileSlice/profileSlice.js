import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  value: {
    login: "developer21",
    password: "123456",
  }
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
});

export const selectProfile = (state) => state.profile.value;
export default profileSlice.reducer;