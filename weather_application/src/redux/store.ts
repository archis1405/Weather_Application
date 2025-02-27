import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './slices/ForecastSlice';
import uiReducer from './slices/UISlice';

export const store = configureStore({
    reducer: {
        forecast: forecastReducer,
        ui: uiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;