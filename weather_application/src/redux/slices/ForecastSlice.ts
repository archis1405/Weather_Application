import { createSlice } from "@reduxjs/toolkit";
import ForeCastData from "../../interfaces/ForeCastData";

interface ForecastDataState {
    status: 'default' | 'loading' | 'success' | 'error';
    data: ForeCastData | undefined;
}

const initialState : ForecastDataState = {
    status: 'default',
    data:undefined,
}

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: () => {

    }
});

export default forecastSlice.reducer;