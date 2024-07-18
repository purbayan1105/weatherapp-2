// import { inputAtom, nameAtom } from "@/utils/atom";
import { inputAtom, locationAtom, nameAtom, weatherAtom } from "@/utils/atom";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";

const Seacrhbar = ({ data }: any) => {
  const queryClient = useQueryClient();
  const [location, setLocation] = useAtom(locationAtom);

  const [input, setInput] = useAtom(inputAtom);
  const [name, setName] = useAtom(nameAtom);
  const [weatherData, setWeatherData] = useAtom(weatherAtom);

  // const [value, setValue]

  const handleClick = async (e: any) => {
    // console.log(input);
    if (input !== "") {
      // queryClient.refetchQueries();
      setInput(e.target.value);
      setName(input);
      // console.log(input);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=625256ded80b46f5849150644241205&q=${input}&aqi=no`
      );
      const data = response.data;
      setWeatherData(data);

      setInput("");
    } else {
      alert("Provide name");
    }
  };

  // useEffect(() => {
  //   if (name.toLowerCase() === data.location.name.toLowerCase()) {
  //     setTimeout(() => {
  //       setLocation({
  //         latitude: data.location.lat,
  //         longitude: data.location.lon,
  //       });
  //       queryClient.refetchQueries();
  //     }, 2000);
  //   }
  // }, [data]);

  return (
    <>
      <div className="py-6">
        <div className="bg-gradient-to-r from-white to-gray-200 mx-8 py-3 rounded-xl grid grid-cols-4 shadow-md">
          <input
            type="search"
            placeholder="Search your city..."
            value={input}
            className="bg-transparent border-none outline-none px-3 h-full col-span-3 text-black"
            onChange={(e: any) => setInput(e.target.value)}
          />
          <button className="flex justify-end mx-5 " onClick={handleClick}>
            <GrSearch size={30} color="#03ac13" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Seacrhbar;
