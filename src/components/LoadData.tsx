import { ImLocation2 } from "react-icons/im";
import Seacrhbar from "./Seacrhbar";
import TempSection from "./TempSection";
import Alldata from "./Alldata";
import Footer from "./Footer";
import { Skeleton } from "@nextui-org/react";

const LoadData = ({ data }: any) => {
  return (
    <div>
      {" "}
      <div className="bg-gradient-to-br from-blue-300 to-white bg-cover bg-center h-auto">
        <Skeleton>
          <Seacrhbar />
        </Skeleton>

        <div className="flex justify-between items-center mx-8">
          <div className="">
            <Skeleton>
              <div className="text-2xl">{}</div>
            </Skeleton>
            <Skeleton>
              <div className=" text-xl">12/07/2024</div>
            </Skeleton>
          </div>
          <div className="">
            <Skeleton>
              <ImLocation2 size={25} color="#03ac13" />
            </Skeleton>
          </div>
        </div>
        <Skeleton>
          <TempSection data={data} />
        </Skeleton>
        <Skeleton>
          <Alldata data={data} />
        </Skeleton>
        <Footer />
      </div>
    </div>
  );
};

export default LoadData;
