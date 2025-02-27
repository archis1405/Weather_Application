import Lowerhalf from "./Lowerhalf";
import Upperhalf from "./Upperhalf";


function SideBar(){
    return(
        <div className="overflow-y-auto basis-3/12 flex flex-col justify-between items-center text-black  rounded-tl-3xl rounded-bl-3xl" style={{background: "rgba(255,255,255,0.5)"}}>
            <Upperhalf />
            <div className="h-[2px] w-[85%] mt-8 bg-white rounded-md">
            </div>
            <Lowerhalf />

        </div>
    )
}

export default SideBar;