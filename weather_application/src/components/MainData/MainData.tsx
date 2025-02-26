import HighlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData(){
    return(
        <div className="overflow-y-auto flex flex-col justify-start py-4 items-center basis-9/12 text-black bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl">
            <TopRow />
            <WeekRow />
            <div>
                TODAY'S HIGHLIGHTS
            </div>
            <HighlightRow />
        </div>
    )
}

export default MainData;