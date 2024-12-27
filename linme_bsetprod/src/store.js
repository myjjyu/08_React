import { configureStore } from '@reduxjs/toolkit';

import BestProductsSlice from './slices/BestProductsSlice';

const store = configureStore({
    reducer: {
        BestProductsSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;