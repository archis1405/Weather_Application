import { createSlice } from "@reduxjs/toolkit";

interface DayForecast {
    date:string,
    avgtemp_c: number,
    avgtemp_f: number,
    condition: string,
}

interface CurrentDayForecast {
    uv: number,
    wind_kph: number,
    humidity: number,
    vis_km: number,
    aqi: number,
    sunrise: string,
    sunset: string,
    temp_c: number,
    temp_f: number,
    condition: string,
    is_day: boolean,
    chance_of_rain: number,
}


interface ForecastData {
    location:{localtime: string, region: string, country: string , name: string},
    forecast: DayForecast[],
    currentData : CurrentDayForecast,
}

interface ForecastDataState {
    status: 'default' | 'loading' | 'success' | 'error';
    data: ForecastData | undefined;
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