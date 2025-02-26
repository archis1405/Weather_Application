import { createSlice } from "@reduxjs/toolkit";
import ForecastDataState from "../../interfaces/ForeCastDataState";
import axiosInstance from "../../config/AxiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState : ForecastDataState = {
    status: 'default',
    data:undefined,
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    try{
        const response = await axiosInstance.get(`/forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes`);
        console.log(response);
        return response;
    }
    catch(error){
        console.log(error);
        return error;
    }
});

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled,(state, action) => {
            if(!action.payload)
                return;

            console.log("action",action);
        })
    }
});

export default forecastSlice.reducer;