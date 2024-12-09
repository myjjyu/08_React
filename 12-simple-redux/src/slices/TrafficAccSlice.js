import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";

// 반복되는 코드를 줄이기 위해 reduxHelper를 사용
import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "./traffic_acc";

export const getList = createAsyncThunk(
  "TrafficAccSlice/getList",
  async (payload, { rejectWithValue }) => {
    let result = null;
    let args = { _sort: "id", _order: "desc" }; // 정렬

    try {
      result = await axiosHelper.get(API_URL, args);
    } catch (error) {
      result = rejectWithValue(error);
    }

    return result;
  }
);

const TrafficAccSlice = reduxHelper.getDefaultSlice("TrafficAccSlice", [
  getList,
]);

export default TrafficAccSlice.reducer;
