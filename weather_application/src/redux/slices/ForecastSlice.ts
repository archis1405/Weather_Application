import { createSlice } from "@reduxjs/toolkit";
import ForecastDataState from "../../interfaces/ForeCastDataState";
import axiosInstance from "../../config/AxiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState : ForecastDataState = {
    status: 'default',
    data:{
        location: {
            country:'',
            region: '',
            localtime: '',
            name: ''
        },
        forecast: [],
        currentData: {
            uv: 0,
            wind_kph: 0,
            humidity: 0,
            vis_km: 0,
            aqi: 0,
            sunrise: '',
            sunset: '',
            temp_c: 0,
            temp_f: 0,
            condition: '',
            is_day: false,
            chance_of_rain: 0
            
        },
    },
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    try{
        console.log(import.meta.env.VITE_API_KEY);
        const apiUrl = `/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=London&days=7&aqi=yes`;
        console.log("API Request URL:", apiUrl);
        const response = await axiosInstance.get(apiUrl);
        console.log(response);
        return response.data;
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
            state.status = 'success';
            console.log("action",action);
            
            const {location} = action.payload;
            if (state.data) {
                state.data.location.country = location?.country;
                state.data.location.name = location?.name;
                state.data.location.region = location?.region;
                state.data.location.localtime = location?.localtime;
            }

        })
        .addCase(fetchData.pending,(state) => {
            state.status = 'loading';
        })
    }
});

export default forecastSlice.reducer;