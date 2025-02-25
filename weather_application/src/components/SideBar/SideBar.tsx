import Lowerhalf from "./LowerHalf";
import Upperhalf from "./UpperHalf";


function SideBar(){
    return(
        <div className="basis-3/12 flex flex-col justify-between items-center text-black h-[100%] rounded-tl-3xl rounded-bl-3xl" style={{background: "rgba(255,255,255,0.5)"}}>
            <Upperhalf />
            <Lowerhalf />

        </div>
    )
}

export default SideBar;