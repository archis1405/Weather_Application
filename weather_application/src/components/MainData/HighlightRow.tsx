import { useSelector } from "react-redux";
import HighLightCard from "../HighLightCard";
import ReduxState from "../../interfaces/ReduxState";

function HighlightRow(){

    const currentData = useSelector((state:ReduxState) => state.forecast.data.currentData);

    function uvRange():string{
        if(currentData.uv <=5)
            return "LOW";
        else if( currentData.uv > 5 && currentData.uv <=8)
            return "MODERATE";
        else if(currentData.uv >=8)
            return "HIGH";
        return "Unknown";
    }

    function humidityRange():string{
        if(currentData.humidity <=50)   
            return "LOW";
        else if(currentData.humidity > 50 && currentData.humidity <=80)
            return "MODERATE";
        else
            return "HIGH";   
    }

    function visibilityRange():string{
        if(currentData.vis_km <=5)
            return "LOW";
        else if(currentData.vis_km >5 && currentData.vis_km <=10)
            return "MODERATE";
        else
            return "HIGH";
    }

    function aqiRange():string{
        if(currentData.aqi <=100)
            return "GOOD";
        else if(currentData.aqi >100 && currentData.aqi <=200) 
            return "MODERATE";
        else if(currentData.aqi >200 && currentData.aqi <=300) 
            return "POOR";
        else if(currentData.aqi >300 && currentData.aqi <=400) 
            return "VERY POOR";
        else 
            return "SEVERE";
        
    }

    function getTextColor(range: string): string {
        switch (range) {
            case "LOW":
                return "text-green-500 text-lg"; 
            case "MODERATE":
                return "text-yellow-500 text-semibold text-lg"; 
            case "HIGH":
                return "text-red-500 text-semibold text-lg"; 
            case "GOOD":
                return "text-green-500 text-semibold text-lg"; 
            case "POOR":
            case "VERY POOR":
                return "text-orange-500 text-semibold text-lg"; 
            case "SEVERE":
                return "text-red-700 text-semibold text-lg"; 
            default:
                return "text-gray-500 text-semibold text-lg"; 
        }
    }

    return(

        
        <div className="flex flex-wrap gap-6 px-12 py-2">
            <HighLightCard title="UV Index" 
                           data={currentData.uv.toString() || "N/A"}
                           footer={<span className={getTextColor(uvRange())}>{uvRange()}</span>} 
            />
            <HighLightCard title="WIND STATUS" 
                           data={currentData.wind_kph.toString() || "N/A"}
                           footer="kmph " 
            />
            <HighLightCard title="HUMIDITY" 
                           data={currentData.humidity.toString() || "N/A"} 
                           footer={<span className={getTextColor(humidityRange())}>{humidityRange()}</span>} 
            />
            <HighLightCard title="VISIBILITY" 
                           data={currentData.vis_km.toString() || "N/A"} 
                           footer={<span className={getTextColor(visibilityRange())}>{visibilityRange()}</span>} 
            />
            <HighLightCard title="SUNRISE" 
                           data={currentData.sunrise.toString() || "N/A"} 
                           footer={currentData.sunset.toString() || "N/A"}
            />
            <HighLightCard title="AIR QUALITY" 
                           data={currentData.aqi.toString() || "N/A"} 
                           footer={<span className={getTextColor(aqiRange())}>{aqiRange()}</span>} 
            />
            
        </div>
    )
}

export default HighlightRow;