{/* Stores the data for the today only i.e. stores the data for today only */}

export default interface CurrentDayForecast {
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