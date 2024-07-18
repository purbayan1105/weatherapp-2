import { GiSunglasses } from "react-icons/gi";
import { IoIosCloud } from "react-icons/io";
import { MdHeatPump } from "react-icons/md";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import { WiCloudyGusts } from "react-icons/wi";

const Alldata = ({ data }: any) => {
  return (
    <>
      <div className="mt-10 space-y-5 mx-8 bg-[#ffffff76] py-5 px-5 rounded-xl">
        <div className="flex justify-between items-center ">
          <div className="flex w-[60%] items-center gap-3">
            <IoIosCloud size={20} color="#03ac13" />
            <p className="">Cloud</p>
          </div>
          <p>{data.current.cloud}</p>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex  w-[60%] items-center gap-3">
            <GiSunglasses size={20} color="#03ac13" />
            <p>UV Index</p>
          </div>
          <p>{data.current.uv}</p>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex  w-[60%] items-center gap-3">
            <VscDebugBreakpointConditionalUnverified
              size={20}
              color="#03ac13"
            />
            <p>Condition</p>
          </div>
          <p className="w-[40%] flex justify-end">
            {data.current.condition.text}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex   w-[60%] items-center  gap-3">
            <MdHeatPump size={20} color="#03ac13" />
            <p>Heat Index</p>
          </div>
          <p>{data.current.heatindex_c}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex  w-[60%] items-center gap-3">
            <WiCloudyGusts size={20} color="#03ac13" />
            <p>Gust</p>
          </div>
          <p>{data.current.gust_kph}</p>
        </div>
      </div>
    </>
  );
};

export default Alldata;
