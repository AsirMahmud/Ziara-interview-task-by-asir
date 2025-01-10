import {
  HotelPrice,
  HotelProps,
  HotelTag as HotelTagProp,
} from "@/app/types/carddata";
import React from "react";
import { HotelTag } from "./HotelTag";

export default function Pricing({
  price,
  tags,
}: {
  price: HotelPrice;
  tags: HotelTagProp[];
}) {
  return (
    <>
      <div className="md:flex md:border-l hidden  border-dashed p-4 border-zinc-600   flex-col my-auto">
        <div className="flex flex-col items-end  w-full max-md:pl-5">
          <div className="md:flex  hidden gap-4 text-xs font-medium whitespace-nowrap">
            {tags.map((tag, index) => (
              <HotelTag key={index} tag={tag} />
            ))}
          </div>
          <div className="md:flex hidden  gap-2 items-center self-start mt-4">
            <div className="text-[#434343] text-base font-normal  line-through">
              {price.original}
            </div>
            <div className="text-[#4f54d8] text-2xl font-bold ">
              {price.discounted}
            </div>
          </div>
          <div className="md:flex hidden mt-1 text-xs text-zinc-600">
            Includes Taxes & Charges
          </div>
          <div className="mt-2 text-base text-right text-zinc-600">
            {price.nights} nights
          </div>
          <div className="mt-2 text-sm text-right text-zinc-600">
            {price.occupancy}
          </div>
        </div>
        <button className="px-12 py-2 mt-1  text-base font-medium text-center text-indigo-600 rounded-lg border border-indigo-600 border-solid max-md:px-5">
          Choose Room
        </button>
      </div>
      <div className="p-2 md:hidden flex justify-between items-center border-t border-dashed border-zinc-600">
        <div>
          <span className="text-[#4f54d8] text-xl font-bold ">
            {price.discounted}
          </span>
          <span className="text-[#6f6f6f] text-base font-bold ">/ </span>
          <span className="text-[#6f6f6f] text-sm font-bold ">
            {price.nights} nights
          </span>
        </div>
        <div className="">
          <button className="px-12 py-2 mt-1  text-base font-medium text-center text-indigo-600 rounded-lg border border-indigo-600 border-solid max-md:px-5">
            Choose Room
          </button>
        </div>
      </div>
    </>
  );
}
