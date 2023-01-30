import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import languageReducer from './languageSlice';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['darkmode'],
};
const combinedreducer = combineReducers({
  user: userReducer,
  language: languageReducer,
});
const persistedReducer = persistReducer(persistConfig, combinedreducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);