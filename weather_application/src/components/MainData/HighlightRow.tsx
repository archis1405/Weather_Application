import HighLightCard from "../HighLightCard";

function HighlightRow(){
    return(
        <div className="flex flex-wrap gap-6 px-12 py-2">
            <HighLightCard title="UV Index" data="3.8" footer="LOW"/>
            <HighLightCard title="UV Index" data="3.8" footer="LOW"/>
            <HighLightCard title="UV Index" data="3.8" footer="LOW"/>
            <HighLightCard title="UV Index" data="3.8" footer="LOW"/>
            <HighLightCard title="UV Index" data="3.8" footer="LOW"/>
            <HighLightCard title="UV Index" data="3.8" footer="LOW"/>
            <HighLightCard title="UV Index" data="3.8" footer="LOW"/>
            
        </div>
    )
}

export default HighlightRow;