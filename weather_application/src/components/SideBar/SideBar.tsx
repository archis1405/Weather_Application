import Lowerhalf from "./LowerHalf";
import Upperhalf from "./UpperHalf";


function SideBar(){
    return(
        <div className="basis-3/12 flex flex-col justify-between items-center text-black h-[100%] rounded-tl-3xl rounded-bl-3xl" style={{background: "rgba(255,255,255,0.5)"}}>
            <Upperhalf />
            <div className="h-[1px] w-[85%] mt-8 bg-white rounded-md">
            </div>
            <Lowerhalf />

        </div>
    )
}

export default SideBar;