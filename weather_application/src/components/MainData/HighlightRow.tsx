import { useSelector } from "react-redux";
import HighLightCard from "../HighLightCard";
import ReduxState from "../../interfaces/ReduxState";

function HighlightRow(){

    const currentData = useSelector((state:ReduxState) => state.forecast.data.currentData);
    
    return(

        
        <div className="flex flex-wrap gap-6 px-12 py-2">
            <HighLightCard title="UV Index" data={currentData.uv.toString()} footer=""/>
            <HighLightCard title="WIND STATUS" data={currentData.wind_kph.toString()} footer="kmph"/>
            <HighLightCard title="HUMIDITY" data={currentData.humidity.toString()} footer=""/>
            <HighLightCard title="VISIBILITY" data={currentData.vis_km.toString()} footer=""/>
            <HighLightCard title="SUNRISE" data={currentData.sunrise.toString()} footer={currentData.sunset.toString()}/>
            <HighLightCard title="AIR QUALITY" data={currentData.aqi.toString()} footer=""/>
            
        </div>
    )
}

export default HighlightRow;