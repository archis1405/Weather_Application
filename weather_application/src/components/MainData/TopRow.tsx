function TopRow(){
    return(
        <div className="flex justify-between items-center w-full px-12 py-2">
            <div className="flex items-center justify-between text-xl font-semibold">
                {/* Today or Week */}
                <div className="mr-4">
                    TODAY
                </div>
                <div className="ml-4 text-primary">
                    WEEK
                </div>
            </div>

            <div className="flex items-center justify-center">
                {/* Celcius or Farenheit */}
                
                    <div className="mr-8 border rounded-[100%] bg-black text-white px-[14px] py-3">
                        °C
                    </div>
                    <div className="ml-8 border rounded-[100%] bg-white text-black px-[14px] py-3">
                        °F
                    </div>
                
            </div>
        </div>
    )
}

export default TopRow;