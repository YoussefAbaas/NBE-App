import { createSlice } from '@reduxjs/toolkit'
import { AsyncStorage, I18nManager } from 'react-native';

const initialState = {
  AR:false,
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    change:(state) => {
     state.AR=(!state.AR);
    },
  },
})

// Action creators are generated for each case reducer function
export const { change} = languageSlice.actions

export default languageSlice.reducer