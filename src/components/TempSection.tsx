import { FaTemperatureLow, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const TempSection = ({ data }: any) => {
  return (
    <>
      <div className="mt-10 bg-[#ffffff76] mx-8 py-5 rounded-xl h-auto ">
        <div className="flex justify-center relative ">
          <div className="">
            <div className="text-8xl font-semibold ">
              {data.current.temp_c.toFixed(0)}
              <sup>°C</sup>
            </div>

            <img
              src={data.current.condition.icon}
              alt=""
              className="w-16 absolute  top-10 left-44 z-10"
            />

            {/* <div className="absolute bottom-3 left-5">°C</div> */}
            <div className="flex justify-center mt-5 text-2xl font-semibold px-5">
              {data.current.condition.text}
            </div>
            <div className="flex justify-between items-center mt-8 px-5">
              <div className="">
                <FaWind size={25} color="#03ac13" />
                <div className="">{data.current.wind_kph}</div>
              </div>
              <div className="">
                <WiHumidity size={30} color="#03ac13" />
                <div className="">{data.current.humidity}%</div>
              </div>
              <div className="">
                <FaTemperatureLow size={25} color="#03ac13" />
                <div className="">
                  {" "}
                  {data.current.feelslike_c} <sup>°C</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempSection;
