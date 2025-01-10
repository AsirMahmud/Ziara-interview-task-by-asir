import { HotelProps } from "@/app/types/carddata";
import { SquareArrowOutUpRight, Star, ThumbsUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Features } from "./Feature";

export default function Info({
  name,
  address,
  distance,
  rating,
  reviews,
  view,

  amenities,
}: HotelProps) {
  const arrayOfFive = Array(5).fill(null);
  return (
    <div className="flex flex-col items-start self-start py-2 ">
      <div className="flex gap-5 justify-between self-stretch  tracking-wider">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center  justify-between w-full">
            {" "}
            <h2 className="self-start md:text-2xl   text-black font-bold">
              {name}
            </h2>
            <div className="flex">
              {arrayOfFive.map((_, index) => (
                <Star
                  key={index}
                  fill="#FF971C"
                  size={16}
                  className={`w-4 h-4 text-[#FF971C] mt-1`}
                />
              ))}
            </div>
          </div>
          <div className=" text-[#616161]  mt-4 md:text-[16px] text-sm  font-normal  tracking-wide">
            {address}
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-4 md:flex-row flex-col-reverse text-xs tracking-wider">
        <Link
          href="#"
          className="flex gap-2 font-bold text-indigo-600"
          tabIndex={0}
        >
          <span>View property in map</span>
          <SquareArrowOutUpRight size={16} />
        </Link>
        <div className="font-medium basis-auto text-neutral-700">
          📍 {distance}
        </div>
      </div>

      <div className="flex gap-1.5 mt-4 h-full font-medium">
        <div className="flex flex-col ">
          <div className="flex gap-4 text-sm  text-zinc-600">
            {amenities.map((amenity, index) => (
              <Features key={index} amenity={amenity} />
            ))}
          </div>
          <div className="flex gap-2 self-start px-2 py-1.5 mt-4 text-base text-black rounded-xl bg-neutral-200 bg-opacity-30">
            <ThumbsUp
              fill="#5054D9"
              className="w-5 h-5 text-[#5054D9] cursor-pointer"
            />
            <div className="basis-auto">
              <span className="text-black">{rating} </span>
              <span className="text-zinc-600">({reviews} reviews)</span>
            </div>
          </div>
        </div>
        <div className="self-start text-sm text-zinc-600">{view}</div>
      </div>
    </div>
  );
}
