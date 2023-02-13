import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';
import {getbeneficiers} from '../firebase/FirestoreDB';

const fetchBeneficiers = createAsyncThunk(
  'beneficiers/getusers',
  async phone => {
    const data = await getbeneficiers();
    const filtered_data = data.filter(user => {
      return user.relateduserphone == phone;
    });
    return filtered_data;
  },
);
const initialState = {
  data: [],
};

export const beneficiersSlice = createSlice({
  name: 'beneficiers',
  initialState,
  reducers: {
    /* fetch: (state, action) => {
      const fetchData = async () => {
        const data = await getbeneficiers();
        const filtered_data = data.filter(user => {
          return user.relateduserphone == action.payload;
        });
        return data;
      };
      state.data = fetchData();
      //console.log(fetchData());
      console.log('state data is', fetchData());
    },
  },*/
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBeneficiers.fulfilled, (state, action) => {
      // Add user to the state array
      //console.log('action payload is', action.payload);
      state.data = action.payload;
      console.log(action.payload);
      console.log('dispatched');
    });
  },
});

// Action creators are generated for each case reducer function
//export const {fetch} = beneficiersSlice.actions;
export const fetchusers = fetchBeneficiers;

export default beneficiersSlice.reducer;
