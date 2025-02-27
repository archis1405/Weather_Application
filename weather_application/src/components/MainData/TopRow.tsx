import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTemperatureUnit, setViewMode } from '../../redux/slices/UISlice'; // We'll create this slice

function TopRow() {
    const dispatch = useDispatch();
    const [activeView, setActiveView] = useState<'today' | 'week'>('today');
    const [activeUnit, setActiveUnit] = useState<'C' | 'F'>('C');

    // Handler for toggling between today and week view
    const handleViewToggle = (view: 'today' | 'week') => {
        setActiveView(view);
        dispatch(setViewMode(view));
    };

    // Handler for toggling between Celsius and Fahrenheit
    const handleUnitToggle = (unit: 'C' | 'F') => {
        setActiveUnit(unit);
        dispatch(setTemperatureUnit(unit));
    };

    return (
        <div className="flex justify-between items-center w-full px-12 py-2">
            <div className="flex items-center justify-between text-xl font-semibold text-white">
                {/* Today or Week toggle */}
                <div 
                    className={`mr-4 cursor-pointer px-4 py-1 rounded transition-colors ${
                        activeView === 'today' ? 'text-primary font-bold' : 'hover:text-gray-300'
                    }`}
                    onClick={() => handleViewToggle('today')}
                >
                    TODAY
                </div>
                <div 
                    className={`ml-4 cursor-pointer px-4 py-1 rounded transition-colors ${
                        activeView === 'week' ? 'text-primary font-bold' : 'hover:text-gray-300'
                    }`}
                    onClick={() => handleViewToggle('week')}
                >
                    WEEK
                </div>
            </div>
            <div className="flex items-center justify-center">
                {/* Celsius or Fahrenheit toggle */}
                <div 
                    className={`mr-3 border rounded-full cursor-pointer px-[14px] py-3 transition-colors ${
                        activeUnit === 'C' ? 'bg-black text-white' : 'bg-white text-black'
                    }`}
                    onClick={() => handleUnitToggle('C')}
                >
                    °C
                </div>
                <div 
                    className={`ml-3 border rounded-full cursor-pointer px-[14px] py-3 transition-colors ${
                        activeUnit === 'F' ? 'bg-black text-white' : 'bg-white text-black'
                    }`}
                    onClick={() => handleUnitToggle('F')}
                >
                    °F
                </div>
            </div>
        </div>
    );
}

export default TopRow;