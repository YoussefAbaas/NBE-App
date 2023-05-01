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
    },
    removeNavState: state => {
      state.navigationState = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {save, removeNavState} = navigationSlice.actions;

export default navigationSlice.reducer;
