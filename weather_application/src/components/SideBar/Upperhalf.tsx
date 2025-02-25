import { AiOutlineSearch } from "react-icons/ai";

function Upperhalf(){
    return(
        <div className= "h-[50%] w-full p-4">
            <div className="flex flex-start ">
                {/* Search bar */}
                <input 
                type="text" 
                placeholder="Search" 
                className="px-2 py-2 border-2 border-gray-300 block basis 3/4 rounded-tl-md rounded-bl-md bg-white text-black" 
                />

                <button className= "basis 1/4 text-white text-large bg-blue-500 p-4 font-bold rounded-tr-md rounded-br-md ">
                    <AiOutlineSearch />
                </button>
            </div>
            Upperhalf
        </div>
    )
}

export default Upperhalf;