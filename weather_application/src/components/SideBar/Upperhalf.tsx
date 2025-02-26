import { AiOutlineSearch } from "react-icons/ai";
import Sunny from "../../assets/sunny.png";

function Upperhalf(){
    return(
        <div className= "max-h-[30rem] w-full p-4 flex flex-col justify-center items-start basis-[65%]">
            <div className="flex flex-start w-full mt-8">
                {/* Search bar */}
                <input 
                type="text" 
                placeholder="Search" 
                className="px-2 py-2 border-2 block basis-[90%] rounded-tl-md rounded-bl-md bg-white text-black" 
                />

                <button className= " basis-[10%] text-white text-large bg-blue-500 p-4 font-bold rounded-tr-md rounded-br-md ">
                    <AiOutlineSearch />
                </button>

            </div>

            <div className="w-full h-[60%] flex justify-center mt-8">
                {/* The Weather Image */}
                <img src={Sunny}
                   className="w-[60%] h-full"    
                />
            </div>

            <div className="flex flex-col mt-4">
                {/* The Temparature Data */}
                <div className= "text-6xl text-black flex  items-start" >
                    <div>25.4</div>
                    <div className="text-4xl mt-1">°C</div>
            </div>

            <div className=" text-md text-black">
                FRIDAY , 12:00 PM
            </div>

            </div>
            
        </div>
    )
}

export default Upperhalf;