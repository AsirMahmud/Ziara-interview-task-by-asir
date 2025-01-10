import * as React from "react";
import { HotelAmenity as HotelAmenityType } from "@/app/types/carddata";

interface Props {
  amenity: HotelAmenityType;
}

export function Features({ amenity }: Props) {
  return (
    <div className="flex gap-1.5 items-center ">
      <img
        loading="lazy"
        src={amenity.icon}
        className="object-contain shrink-0 w-6 aspect-square"
        alt={amenity.label}
      />
      {amenity.label && <span className="text-xs">{amenity.label}</span>}
    </div>
  );
}
