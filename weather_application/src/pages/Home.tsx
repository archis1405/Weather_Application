import MainData from "../components/MainData/MainData";
import SideBar from "../components/SideBar/SideBar";
import backgroundImage from "../../../background.jpg";
import { useEffect } from "react";
import { fetchData } from "../redux/slices/ForecastSlice";
import { useAppDispatch } from "../Hooks/hooks";

function Home(){

    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(fetchData());
    },[]);

    return (
        <div className = "min-h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch " style={{backgroundSize: 'cover', backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${backgroundImage})`}}>
            <SideBar />
            <MainData />
        </div>
            
        
    )
}

export default Home;