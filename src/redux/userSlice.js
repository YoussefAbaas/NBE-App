import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  phone: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.phone = action.payload;
      console.log('user is', state.phone);
    },
    logout: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.phone = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
