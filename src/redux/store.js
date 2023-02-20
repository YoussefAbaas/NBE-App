import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import languageReducer from './languageSlice';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import beneficiersReducer from './beneficiersSlice';
import navigationReducer from './navigationSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['beneficiers'],
};
const combinedreducer = combineReducers({
  user: userReducer,
  language: languageReducer,
  beneficiers: beneficiersReducer,
  navigation: navigationReducer,
});
const persistedReducer = persistReducer(persistConfig, combinedreducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
