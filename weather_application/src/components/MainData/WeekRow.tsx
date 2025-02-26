import TemparatureCard from "../TemperatureCard";
import CloudyDay from "../../assets/CloudyDay.png"
function WeekRow(){
    return(
        <div className="w-full px-12 py-2 flex flex-wrap gap-5">

            <TemparatureCard title="MONDAY" temperature="30.4°C" image={CloudyDay} />
            <TemparatureCard title="TUESDAY" temperature="31.3°C" image={CloudyDay} />
            <TemparatureCard title="WEDNESDAY" temperature="24.6°C" image={CloudyDay} />
            <TemparatureCard title="THURSDAY" temperature="34.2°C" image={CloudyDay} />
            <TemparatureCard title="FRIDAY" temperature="26.9°C" image={CloudyDay} />
            <TemparatureCard title="SATURDAY" temperature="28.0°C" image={CloudyDay} />
            <TemparatureCard title="SUNDAY" temperature="31.1°C" image={CloudyDay} />
    
        </div>
    )
}

export default WeekRow;