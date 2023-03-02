import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  navigationState: null,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    save: (state, actions) => {
      state.navigationState = actions.payload;
      console.log(state.navigationState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {save} = navigationSlice.actions;

export default navigationSlice.reducer;
