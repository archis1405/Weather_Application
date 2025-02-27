import { useSelector } from "react-redux";
import ReduxState from "../../interfaces/ReduxState";
import CloudyDay from "../../assets/CloudyDay.png";
import RainyDay from "../../assets/RainyDay.png";
import SunnyDay from "../../assets/SunnyDay.png";
import ClearNight from "../../assets/ClearNight.png";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

function HourRow() {
    const hourlyForecast = useSelector((state: ReduxState) => state.forecast.data.hourlyForecast);
    const temperatureUnit = useSelector((state: ReduxState) => state.ui.temperatureUnit);

    // Function to get appropriate weather icon based on condition
    const getWeatherIcon = (condition: string = '', isDay: boolean) => {
        const conditionLower = condition.toLowerCase();
        
        if (conditionLower.includes('rain') || conditionLower.includes('drizzle') || conditionLower.includes('shower')) {
            return RainyDay;
        } else if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
            return CloudyDay;
        } else if (!isDay && (conditionLower.includes('clear') || conditionLower.includes('sunny'))) {
            return ClearNight;
        } else {
            return SunnyDay;
        }
    };

    // Format time string to display only hour and AM/PM
    const formatTime = (timeString: string) => {
        const date = new Date(timeString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return (
        <div className="w-full px-6 py-4">
            <h2 className="text-white text-xl font-semibold mb-3">Hourly Forecast</h2>
            <div className="overflow-x-auto">
                <div className="flex space-x-4 pb-2" style={{ minWidth: 'max-content' }}>
                    {hourlyForecast && hourlyForecast.map((hour: { time: string; condition: string | undefined; is_day: number; temp_c: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; temp_f: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; chance_of_rain: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; wind_kph: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: any) => (
                        <div 
                            key={hour.time || index} 
                            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-3 flex flex-col items-center"
                            style={{ minWidth: '100px' }}
                        >
                            <p className="text-white font-medium mb-2">{formatTime(hour.time)}</p>
                            <img 
                                src={getWeatherIcon(hour.condition, hour.is_day === 1)} 
                                alt={hour.condition} 
                                className="w-10 h-10 my-1"
                            />
                            <p className="text-white text-lg font-bold my-1">
                                {temperatureUnit === 'C' ? hour.temp_c : hour.temp_f}°{temperatureUnit}
                            </p>
                            <div className="flex items-center space-x-1 text-xs text-white mt-1">
                                <span>💧 {hour.chance_of_rain}%</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs text-white">
                                <span>💨 {hour.wind_kph} km/h</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HourRow;