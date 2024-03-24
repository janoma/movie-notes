import { createSlice } from "@reduxjs/toolkit";

type SessionState = {
  photoURL?: string;
  userId?: string;
  userName?: string;
};

const initialState: SessionState = {
  photoURL: undefined,
  userId: undefined,
  userName: undefined,
};

const sessionSlice = createSlice({
  initialState,
  name: "session",
  reducers: {
    setPhotoUrl(state, action) {
      state.photoURL = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
  },
  selectors: {
    photoUrl: (state) => state.photoURL,
    userId: (state) => state.userId,
    userName: (state) => state.userName,
  },
});

export default sessionSlice;
