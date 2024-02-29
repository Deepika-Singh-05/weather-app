import Image from "next/image";
import { WiHumidity } from "react-icons/wi";
import { FaRegEye } from "react-icons/fa";
import { TbArrowsDiagonalMinimize, TbWind } from "react-icons/tb";

const WeatherCard = ({ weather }) => {
  const { data } = weather;

  return (
    <div className="relative z-5 flex flex-col justify-around items-center w-[100vw] min-[0px]:justify-around max-[300px]:justify-around  min-[0px]:gap-10 max-[768px]:gap-10 md:gap-12">
      <p className="text-4xl  text-white min-[0px]:text-2xl min-[300px]:text-3xl md:text-4xl mt-10">
        {data.name}
      </p>
      <div className="flex flex-row  justify-around items-center w-[80%] min-[0px]:flex-wrap-reverse max-[468px]:flex-wrap-reverse min-[469px]:flex-nowrap  min-[0px]:gap-4 max-[300px]:gap-4">
        <div className="flex flex-col items-center justify-center min-[0px]:w-[100%] max-[468px]:w-[100%] min-[469px]:w-[50%] ">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            height={100}
            width={100}
            alt="Weather Icon"
          />
          <span className="text-white capitalize text-xl min-[0px]:text-base min-[300px]:text-l md:text-xl min-[0px]:w-[100%] max-[300px]:w-[100%] min-[0px]:text-center max-[468px]:text-center">
            {data.weather[0].description}
          </span>
        </div>
        <p className="text-8xl text-white min-[0px]:text-5xl min-[468px]:text-6xl md:text-7xl min-[469px]:w-[50%]">
          {Math.floor(data.main.temp)}°C
        </p>
      </div>
      <div className="flex justify-center items-center text-xl text-white min-[0px]:text-lg max-[300px]:text-lg min-[300.5px]:text-xl p-[3px]">
        {Math.ceil(data.main.temp_max)}° / {Math.floor(data.main.temp_min)}°
        Feels like {Math.floor(data.main.feels_like)}°
      </div>

      <div className="relative bottom-0 mb-4 p-2 w-[85vw] flex justify-between flex-wrap min-[0px]:flex-wrap max-[820px]:flex-wrap min-[821px]:flex-nowrap min-[0px]:w-gap-4  max-[820px]:gap-4 min-[821px]:gap-2 min-[0px]:justify-center max-[468px]:justify-center  min-[469px]:justify-between  max-[820px]:justify-between min-[821px]:justify-between">
        <div className="rounded-2xl bg-white/30 flex flex-col gap-10 text-white p-4 w-[20%] min-[0px]:w-[70%] max-[468px]:w-[70%] min-[468px]:w-[40%] max-[820px]:w-[40%] md:w[20%] ">
          <span className="font-bold flex gap-2 items-center">
            <WiHumidity className="scale-150" />
            Humidity
          </span>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="rounded-2xl bg-white/30 flex flex-col gap-10 text-white p-4 w-[20%] min-[0px]:w-[70%] max-[468px]:w-[70%] min-[468px]:w-[40%] max-[820px]:w-[40%] md:w[20%]">
          <span className="font-bold flex gap-3 items-center">
            <TbWind className="scale-150" /> Wind
          </span>
          <p>{Math.floor(data.wind.speed * 3.6)}km/h</p>
        </div>
        <div className="rounded-2xl bg-white/30 flex flex-col gap-10 text-white p-4 w-[20%] min-[0px]:w-[70%] max-[468px]:w-[70%] min-[468px]:w-[40%] max-[820px]:w-[40%] md:w[20%]">
          <span className="font-bold flex gap-2 items-center">
            <TbArrowsDiagonalMinimize className="rotate-[45deg] scale-150" />
            Pressure
          </span>
          <p>{data.main.pressure}mb</p>
        </div>
        <div className="rounded-2xl bg-white/30 flex flex-col gap-10 text-white p-4 w-[20%] min-[0px]:w-[70%] max-[468px]:w-[70%] min-[468px]:w-[40%] max-[820px]:w-[40%] md:w[20%]">
          <span className="font-bold flex gap-3 items-center">
            <FaRegEye className="scale-150" />
            Visibility
          </span>
          <p>{data.visibility / 1000}km</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
