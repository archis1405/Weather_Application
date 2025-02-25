import MainData from "../components/MainData/MainData";
import SideBar from "../components/SideBar/SideBar";
import backgroundImage from "../../../background.jpg";

function Home(){
    return (
        <div className = "h-[100vh]" style={{backgroundSize: 'cover', backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${backgroundImage})`}}>
        <div className="h-[100%] mx-10 py-6 flex flex-row justify-center items-center ">
            <SideBar />
            <MainData />
        </div>
            
        </div>
    )
}

export default Home;