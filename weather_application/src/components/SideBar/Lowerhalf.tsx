import { FaDroplet } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Lowerhalf(){
    return(
        
            <div className="h-[50%] w-full flex flex-col justify-between items-start">
                <div className="flrx flex-col">
                    {/*Precipitation Data*/}
                    <div className="flex items-center gap-4 my-2 px-2 py-2 text-sm">
                        <div>
                            <FaSun />
                        </div>
                        <div className="fontsize-sm">
                            SUNNY
                        </div>

                    </div>

                    <div className="flex items-center gap-2 my-2 text-sm px-2 py-2">
                        <div>
                            {/* this will contain the droplet icon */}
                            <FaDroplet />
                        </div>
                        <div className="fontsize-sm">
                            PRECIPITATION - 10%
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 items-center px-2 py-2 text-sm">
                    {/*Location Data*/}
                    <div>
                        <IoLocationSharp />
                    </div>
                    <div className="fontsize-sm">
                        New-Delhi , New-Delhi , India
                    </div>
                    
                </div>
            </div>
        
    )
}

export default Lowerhalf;