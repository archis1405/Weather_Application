import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    temperatureUnit: 'C' | 'F';
    viewMode: 'today' | 'week';
}

const initialState: UIState = {
    temperatureUnit: 'C',
    viewMode: 'today',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setTemperatureUnit: (state, action: PayloadAction<'C' | 'F'>) => {
            state.temperatureUnit = action.payload;
        },
        setViewMode: (state, action: PayloadAction<'today' | 'week'>) => {
            state.viewMode = action.payload;
        },
    },
});

export const { setTemperatureUnit, setViewMode } = uiSlice.actions;
export default uiSlice.reducer;