import DayForecast from "./DayForeCast";
import CurrentDayForecast from "./CurrentDayForeCast";


export default interface ForecastData {
    location:{localtime: string, region: string, country: string , name: string},
    forecast: DayForecast[],
    currentData : CurrentDayForecast,
}