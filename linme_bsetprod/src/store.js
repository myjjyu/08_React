import { configureStore } from '@reduxjs/toolkit';

import BestProductsSlice from './slices/BestProductsSlice';
import SalesSlice from './slices/SalesSlice';
import NewMemberSlice from './slices/NewMemberSlice';

const store = configureStore({
    reducer: {
        BestProductsSlice,
        SalesSlice,
        NewMemberSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;