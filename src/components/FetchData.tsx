import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import { useAtom } from "jotai";
// import { inputAtom, nameAtom } from "@/utils/atom";
import { useEffect, useState } from "react";
import { inputAtom, locationAtom, nameAtom, weatherAtom } from "@/utils/atom";
import LoadData from "./LoadData";
import { divider, Spinner } from "@nextui-org/react";

const FetchData = () => {
  const [location, setLocation] = useAtom(locationAtom);
  const [input, setInput] = useAtom(inputAtom);
  const [weatherData, setWeatherData] = useAtom(weatherAtom);
  const [name, setName] = useAtom(nameAtom);

  const { data, isFetching, isLoading, isFetched, isSuccess } = useQuery({
    queryKey: ["weather-api-fetching"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=625256ded80b46f5849150644241205&q=${location.latitude},${location.longitude}&aqi=no`
      );

      const info = response.data;

      console.log(info);

      return info;
    },

    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setWeatherData(data);
    console.log(weatherData);
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <>
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-300 to-white bg-cover bg-center lg:w-[361px]">
          <Spinner label="Loading..." color="success" size="lg" />
        </div>
        {/* <LoadData /> */}
      </>
    );
  }
  if (isFetched && isSuccess) {
    return (
      <>
        <DisplayCard data={weatherData} />
      </>
    );
  }
};

export default FetchData;
