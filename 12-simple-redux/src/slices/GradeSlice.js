import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";

// 연동할 백엔드 주소(에러테스트용)
// 하지만??에러 404 를 걸어놓지 않아서 아무 응답이 없다.
// const API_URL = '/grade123';

// 연동할 백엔드 주소
const API_URL = "/grade";

/** Ajax 처리를 위한 함수를 정의  */
export const getList = createAsyncThunk(
  "GradeSlice/getList",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axiosHelper.get(API_URL);
    } catch (err) {
      return rejectWithValue(err);
    }
    return result;
  }
);

/** slice 객체 생성 */
const GradeSlice = createSlice({
  // 1) slice 객체의 이름 --> slice 객체명과 동일하게 설정 
  name: "GradeSlice",

  // 2) 이 모듈이 관리하고자 하는 상태값을들 명시 
  // --> Ajax 처리시 백엔드로부터 전달되는 데이터와 로딩 상태를 저장하기 위한 용도 
  initialState: {
    status:200,
    message: "OK",
    item: null,
    timestamp: null,
    loadint: "false",
  }, 

  // 3) 일반 상태값을 갱신하기 위한 함수들을 구현한다. (여기서는 사용 안함)
  reducers: {},

  // 4) 비동기 상태값을 갱신하기 위한 함수들을 구현한다 (주로 Ajax 처리)
  extraReducers:(builder) => {
    // 백엔드와 연동 직전에 호출된다 --> 로딩중임을 표시 
    // meta: {arg, requestId, requestStatus}
    // => arg: 컴포넌트에서 액션함수를 호풀할때 전달한 파라미터(payload)
    // payload: 백엔드에서 전달한 데이터
    builder.addCase(getList.pending, (state, {meta, payload}) => {
      return{...state, loading: true}
    });

    // 백엔드와 연동 성공시 호출된다
    builder.addCase(getList.fulfilled, (state, {meta, payload}) => {
      return{
        status: payload.status,
        message: payload.message,
        item: payload.item,
        timestamp: payload.timestamp,
        loading: false
      }
    });

    // 백엔드와 연동 실패시 호출된다
    builder.addCase(getList.rejected, (state, {meta, payload}) => {
      return{
        ...state, 
        loading: false,
        status: payload.status || 0,
        message: payload.message || "Unknown Error",
      
      }
    });
  },
});

// 리듀서 객체 내보내기
export default GradeSlice.reducer;
