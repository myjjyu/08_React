import { configureStore } from '@reduxjs/toolkit';

import CounterSlice from './slices/CounterSlice';
import GradeSlice from './slices/GradeSlice';
import TrafficAccSlice from './slices/TrafficAccSlice';

const store = configureStore({
    // 리듀서 설정 --> Slice 객체들을 나열하여 설정
    // Slice ==> 백엔드와 통신하는 비동기 처리를 수행하는 객체 
    // 백엔드 url 1개당 파일 하나씩 생성 
    // 사용하지 않는 Slice는 주석처리 또는 적지 않음!! 에러발생할수있음
    reducer: {
        CounterSlice,
        GradeSlice,
        TrafficAccSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;