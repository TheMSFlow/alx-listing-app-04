import Filter from "@/components/common/Filter";
import HeroImg from "../public/assets/hero-img.jpg"
import Image from "next/image"

const Home: React.FC = () => {
  return (
    <>
    <div className="flex flex-row items-center justify-center  mt-8">
      <div className="flex justify-center items-center text-white mx-[60px] relative">
        <Image
          src={HeroImg}
          alt=""
          width={1608}
          height={421}
          className="mx-[60px] rounded-3xl "
        />
        <div className="w-full h-full mx-[60px] rounded-3xl bg-gray-900/50 border absolute top-0 z-2"/>
        <div className="absolute z-3 text-center">
          <p className="text-[60px] font-medium ">Find your favorite place here!</p>
          <p className="text-2xl">The best prices for over 2 million properties worldwide</p>
        </div>
      </div>
    </div>
      <div className="mx-[60px] py-12"><Filter /></div>
    </>
  );
}

export default Home