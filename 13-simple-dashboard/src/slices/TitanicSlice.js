import {createAsyncThunk } from '@reduxjs/toolkit';
import axiosHelper from '../helpers/AxiosHelper';
import reduxHelper from '../helpers/ReduxHelper';

const API_URL = '/titanic';

export const getList = createAsyncThunk('titanicSlice/getList', async (payload, {
  rejectWithValue
}) => {
  let result = null;

  try {
    result = await axiosHelper.get(API_URL);
  } catch (error) {
    result = rejectWithValue(error);
  }
  return result;
});

const TitanicSlice = reduxHelper.getDefaultSlice('TitanicSlice',[getList]);

export default TitanicSlice.reducer;