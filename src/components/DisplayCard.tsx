import { GoLocation } from "react-icons/go";
import Seacrhbar from "./Seacrhbar";
import { ImLocation2 } from "react-icons/im";
import TempSection from "./TempSection";
import Alldata from "./Alldata";
import Footer from "./Footer";
import { useAtom } from "jotai";
// import { inputAtom, nameAtom } from "@/utils/atom";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { inputAtom, locationAtom, nameAtom, weatherAtom } from "@/utils/atom";

export type Location = {
  latitude: number | null;
  longitude: number | null;
};
const DisplayCard = ({ data }: any) => {
  const [location, setLocation] = useAtom(locationAtom);
  const [input, setInput] = useAtom(inputAtom);
  const [name, setName] = useAtom(nameAtom);
  const [weatherData, setWeatherData] = useAtom(weatherAtom);

  const queryClient = useQueryClient();

  let date = new Date();
  // console.log(date);
  let newDate = date.toString().split(" ");
  const today =
    newDate[0] + ", " + newDate[1] + " " + newDate[2] + " " + newDate[3];
  // console.log(newDate);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);

      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setWeatherData(data);
    });
    setTimeout(() => {
      queryClient.refetchQueries();
      // console.log(location);
    }, 1000);
  };

  useEffect(() => {
    if (data && location.latitude && location.longitude) {
      setName(data.location.name);
      // setWeatherData(data);

      // queryClient.refetchQueries();
      // console.log(data.location.name);
    }
  }, [data]);

  return (
    <>
      {data ? (
        <div className="">
          <div className="flex justify-between items-center mx-8">
            <div className="">
              <div className="text-2xl font-bold">
                {name.toLocaleUpperCase()}
              </div>
              <div className=" text-xl">{today}</div>
            </div>
            <div className="">
              <ImLocation2 size={25} color="#03ac13" onClick={getLocation} />
            </div>
          </div>
          <TempSection data={data} />
          <Alldata data={data} />
          <Footer />
        </div>
      ) : (
        <div className="text-xl flex justify-center items-center h-screen">
          Data Not Found
        </div>
      )}
    </>
  );
};

export default DisplayCard;
