import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const fetchUserData = createAsyncThunk('user/getdata', async phone => {
  const user = await firestore()
    .collection('Users')
    .where('phone', '==', phone)
    .limit(1)
    .get()
    .then(querysnapshot => {
      return querysnapshot.docs[0].data();
    });
  return user;
});
const initialState = {
  phone: null,
  accountnum: null,
  balance: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.phone = action.payload.phone;
      state.accountnum = action.payload.accountnum;
      state.balance = action.payload.balance;
    },
    logout: state => {
      state.phone = null;
      state.accountnum = null;
      state.balance = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      //state.phone = action.payload.phone;
      //state.accountnum = action.payload.accountnum;
      state.balance = action.payload.balance;
    });
  },
});

// Action creators are generated for each case reducer function
export const fetchuserdata = fetchUserData;
export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
