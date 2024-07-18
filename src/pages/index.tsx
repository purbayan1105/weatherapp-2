import FetchData from "@/components/FetchData";
import Seacrhbar from "@/components/Seacrhbar";
import { weatherAtom } from "@/utils/atom";
import { useAtom } from "jotai";

const index = () => {
  const [weatherData, setWeatherData] = useAtom(weatherAtom);
  return (
    <div className="lg:w-[361px] lg:flex mx-auto bg-gradient-to-br from-blue-300 to-white bg-cover bg-center h-[115dvh] lg:h-auto">
      <div className="">
        <Seacrhbar data={weatherData} />
        <FetchData />
      </div>
    </div>
  );
};

export default index;
