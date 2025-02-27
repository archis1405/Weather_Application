import { AiOutlineSearch } from "react-icons/ai";
import Sunny from "../../assets/sunny.png";
import { useSelector } from "react-redux";
import ReduxState from "../../interfaces/ReduxState";

function Upperhalf() {
    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);

    return (
        <div className="max-h-[30rem] w-full p-4 flex flex-col justify-center items-start basis-[65%]">
            {/* Search Bar */}
            <div className="flex flex-start w-full mt-8">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-2 py-2 border-2 block basis-[90%] rounded-tl-md rounded-bl-md bg-white text-black"
                />
                <button className="basis-[10%] text-white text-large bg-blue-500 p-4 font-bold rounded-tr-md rounded-br-md">
                    <AiOutlineSearch />
                </button>
            </div>

            {/* Weather Image */}
            <div className="w-full h-[60%] flex justify-center mt-8">
                <img src={Sunny} className="w-[60%] h-full" alt="Weather Icon" />
            </div>

            {/* Temperature Data */}
            <div className="flex flex-col mt-4">
                <div className="text-6xl text-black flex items-start">
                    <div>{currentData?.temp_c ?? "N/A"}</div>
                    <div className="text-4xl mt-1">°C</div>
                </div>

                <div className="text-md text-black">FRIDAY, 12:00 PM</div>
            </div>
        </div>
    );
}

export default Upperhalf;
