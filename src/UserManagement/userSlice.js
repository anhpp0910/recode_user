import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  user: {
    name: "ThienNT",
    account: "thiennt_0910",
    password: "091099",
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

export const { setUserList, setUser } = userSlice.actions;

export default userSlice.reducer;
