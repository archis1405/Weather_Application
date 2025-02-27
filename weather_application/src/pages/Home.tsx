import MainData from "../components/MainData/MainData";
import SideBar from "../components/SideBar/SideBar";
import backgroundImage from "../../../background.jpg";
import { useEffect, useState } from "react";
import { fetchData } from "../redux/slices/ForecastSlice";
import { useAppDispatch } from "../Hooks/hooks";
import axios from "axios";

function Home() {
    const dispatch = useAppDispatch();
    const [city, setCity] = useState<string>('');
    const [locationStatus, setLocationStatus] = useState<string>("Initializing...");

    useEffect(() => {
        const getUserLocation = () => {
            setLocationStatus("Requesting location permission...");
            
            if (!navigator.geolocation) {
                setLocationStatus("Geolocation not supported by browser");
                dispatch(fetchData({city: 'Kolkata'}));
                return;
            }
            
            const success = async (position: GeolocationPosition) => {
                const { latitude, longitude } = position.coords;
                setLocationStatus(`Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
                console.log("Raw coordinates:", position.coords);
                
                try {
                    const apiKey = import.meta.env.VITE_LOCATION_API_KEY;
                    const url = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;
                    
                    const response = await axios.get(url);
                    console.log("LocationIQ response:", response.data);
                    
                    // Log the entire address object to see what's available
                    console.log("Address object:", response.data.address);
                    
                    // Try multiple address fields that might contain the city name
                    const locationCity = 
                        response.data.address?.city ||
                        response.data.address?.town || 
                        response.data.address?.village ||
                        response.data.address?.county ||
                        response.data.address?.state_district ||
                        response.data.address?.suburb ||
                        // If we still can't find a suitable city name, try to construct one
                        (response.data.display_name ? response.data.display_name.split(',')[0] : null) ||
                        'Kolkata';
                    
                    console.log("Detected city:", locationCity);
                    setLocationStatus(`Using location: ${locationCity}`);
                    
                    setCity(locationCity);
                    dispatch(fetchData({city: locationCity}));
                } catch (error: any) {
                    console.error("API Error:", error);
                    setLocationStatus(`API Error: ${error.message || error}`);
                    dispatch(fetchData({city: 'Kolkata'}));
                }
            };
            
            const error = (err: GeolocationPositionError) => {
                console.warn(`Geolocation error (${err.code}): ${err.message}`);
                setLocationStatus(`Location error: ${err.message}`);
                dispatch(fetchData({city: 'Kolkata'}));
            };
            
            const options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            };
            
            navigator.geolocation.getCurrentPosition(success, error, options);
        };
        
        getUserLocation();
    }, []);

    return (
        <div 
            className="min-h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch" 
            style={{
                backgroundSize: 'cover', 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
            }}
        >
            {/* Debugging element - remove in production */}
            <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white p-2 text-sm z-50 rounded">
                {locationStatus}
            </div>
            
            <SideBar />
            <MainData />
        </div>
    );
}

export default Home;

