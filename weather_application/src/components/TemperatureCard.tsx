interface Props {
    title: string;
    temperature: string;
    image: string;
    temperatureUnit?: 'C' | 'F';
}

function TemparatureCard({ title, temperature, image, temperatureUnit = 'C' }: Props) {
    return (
        <div className="flex-1 min-w-[120px] bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center">
            <p className="text-white font-medium mb-2">{title}</p>
            <img src={image} alt="Weather condition" className="w-12 h-12 my-2" />
            <p className="text-white text-xl font-bold mt-2">{temperature}°{temperatureUnit}</p>
        </div>
    );
}

export default TemparatureCard;