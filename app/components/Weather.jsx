"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../features/weather/weatherSlice";
import { BsSearch } from "react-icons/bs";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";

function Weather() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const weather = useSelector((state) => state.weather);

  const handleFetchWeather = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

  return (
    <div className="relative z-10 h-screen flex flex-col pt-6">
      <div className="relative flex justify-center p-8 min-[0px]:p-3 max-[468px]:p-3">
        <form
          className=" relative flex  z-10 overflow-hidden sm:w-1/2 md:w-1/3 min-[0px]:w-[80vw] min-[468px]:w-[70vw]"
          onSubmit={handleFetchWeather}
        >
          <input
            type="text"
            value={city}
            placeholder="Search City"
            onChange={(e) => setCity(e.target.value)}
            className="outline-none p-[8px]  pl-8  border-2 border-gray-300 bg-transparent rounded-3xl text-white/100 w-[80vw] md:w-[100%] font-bold text-lg placeholder:font-normal "
          />
          <button
            onClick={handleFetchWeather}
            className="bg-transparent text-white w-[10%] h-[90%] flex justify-start items-center absolute right-[2px] top-[2.25px] rounded-r-3xl min-[0px]:right-[7px]"
          >
            <BsSearch size={18} />
          </button>
        </form>
      </div>

      <div className="relative flex justify-center z-10  h-full">
        {weather.loading === "loading" && (
          <div>
            <Loading />
          </div>
        )}

        {weather.loading === "succeeded" && weather.data.name && (
          <div>
          <WeatherCard weather={weather}></WeatherCard>

          </div>
        )}
        {weather.loading === "succeeded" && !weather.data.name && (
          <div className="pt-40 text-white text-4xl min-[0px]:text-2xl min-[0px]:pt-[70px] md:text-3xl md:pt-[60px]">
            Invalid City
          </div>
        )}
        {weather.loading === "failed" && (
          <p className="pt-40 text-white text-4xl min-[0px]:text-2xl min-[0px]:pt-[70px] md:text-3xl md:pt-[60px]">
            Error: {weather.error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Weather;
