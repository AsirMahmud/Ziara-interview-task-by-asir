import { HotelProps } from "@/app/types/carddata";
import { Heart, Ellipsis } from "lucide-react";
import React from "react";

export default function MainImage({ images }: { images: { main: string } }) {
  return (
    <div className="md:w-[335px] w-full relative  h-[216px] overflow-hidden rounded-2xl my-auto border ">
      <div className="w-[37.34px] z-20 right-1 top-1 absolute h-[37.34px] bg-[#9e9e9e]/30 rounded-full backdrop-blur-[4.43px] flex justify-center items-center">
        <Heart size={24} className=" text-white" />
      </div>
      <div className="w-20 z-20  bottom-3 left-[40%]  absolute  bg-[#9e9e9e]/30 rounded-2xl backdrop-blur-[4.43px] flex justify-center items-center">
        <Ellipsis size={34} className=" text-white" />
      </div>
      <img
        loading="lazy"
        src={images.main}
        className="object-cover w-full h-full"
        alt={` exterior view`}
      />
    </div>
  );
}
