import MainData from "../components/MainData/MainData";
import SideBar from "../components/SideBar/SideBar";
import backgroundImage from "../../../background.jpg";

function Home(){
    return (
        <div className = "h-[100vh]" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${backgroundImage})`}}>
        <div className="h-[90%] mx-15 my-15 flex flex-row justify-center items-center w-full">
            <SideBar />
            <MainData />
        </div>
            
        </div>
    )
}

export default Home;