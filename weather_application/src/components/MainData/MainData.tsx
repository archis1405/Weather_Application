import HighlightRow from "./HighlightRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData(){
    return(
        <div className="overflow-y-auto flex flex-col justify-start py-4 items-center basis-9/12 text-black bg-black rounded-tr-3xl rounded-br-3xl">
            <TopRow />
            <WeekRow />
            <div className="text-2xl text-white font-semibold mt-8 w-full px-12 py-2">
                TODAY'S HIGHLIGHTS
            </div>
            <HighlightRow />
        </div>
    )
}

export default MainData;