import * as React from "react";

import { HotelProps } from "@/app/types/carddata";
import { Features } from "./Card/Feature";
import { HotelTag } from "./Card/HotelTag";
import Link from "next/link";
import { SquareArrowOutUpRight, Star, ThumbsUp } from "lucide-react";
import { disconnect } from "process";
import Info from "./Card/Info";
import { Main } from "next/document";
import MainImage from "./Card/MainImage";
import Pricing from "./Card/Pricing";

export function HotelCard({
  name,
  address,
  distance,
  rating,
  reviews,
  view,
  images,
  amenities,
  tags,
  price,
}: HotelProps) {
  const arrayOfFive = Array(5).fill(null);
  return (
    <div className="flex md:gap-x-5 mx-auto md:flex-row flex-col  justify-center    lg:justify-between px-4 md:p-2 pt-4  w-full max-w-[467px] md:max-w-[1088px] bg-white rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.12)] md:h-[238px] ">
      <MainImage images={images} />

      <Info
        name={name}
        address={address}
        distance={distance}
        rating={rating}
        reviews={reviews}
        view={view}
        images={images}
        amenities={amenities}
        tags={tags}
        price={price}
      />

      <Pricing price={price} tags={tags} />
    </div>
  );
}
