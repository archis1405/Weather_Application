{/* Stores the data for the next 7 day summary */}

import DayForecast from "./DayForeCast";
import CurrentDayForecast from "./CurrentDayForeCast";


export default interface ForecastData {
    hourlyForecast: any;
    
    location:{localtime: string, region: string, country: string , name: string},
    forecast: DayForecast[],
    currentData : CurrentDayForecast,
}