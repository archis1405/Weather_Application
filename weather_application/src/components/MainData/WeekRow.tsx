import CloudyDay from "../../assets/CloudyDay.png";
import { useSelector } from "react-redux";
import ReduxState from "../../interfaces/ReduxState";
import TemparatureCard from "../TemperatureCard";

function WeekRow() {
    const dayForecast = useSelector((state: ReduxState) => state.forecast.data.forecast);
    const temperatureUnit = useSelector((state: ReduxState) => state.ui.temperatureUnit);
    
    const weekDays: { [key: number]: string } = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };
    
    return (
        <div className="w-full px-12 py-2 flex flex-wrap gap-5">
            {dayForecast && dayForecast.map((forecast, index) => {
                const temperature = temperatureUnit === 'C' 
                    ? forecast.avgtemp_c.toString() 
                    : forecast.avgtemp_f.toString();
                
                return (
                    <TemparatureCard 
                        key={forecast.date || index} 
                        title={weekDays[(new Date(forecast.date)).getDay()]} 
                        temperature={temperature} 
                        temperatureUnit={temperatureUnit}
                        image={CloudyDay} 
                    />
                );
            })}
        </div>
    );
}

export default WeekRow;