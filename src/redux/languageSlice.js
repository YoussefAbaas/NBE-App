import {createSlice} from '@reduxjs/toolkit';
import i18n from '../translation/I18Config';

const initialState = {
  AR: false,
  locale: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    change: state => {
      state.AR = !state.AR;
    },
    setLanguage: (state, action) => {
      //console.log('payload is', action.payload);
      state.locale = action.payload;
      i18n.locale = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {change, setLanguage} = languageSlice.actions;

export default languageSlice.reducer;
