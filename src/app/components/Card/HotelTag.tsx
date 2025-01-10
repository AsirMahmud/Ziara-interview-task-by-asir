import * as React from "react";
import { HotelTag as HotelTagType } from "@/app/types/carddata";

interface Props {
  tag: HotelTagType;
}

export function HotelTag({ tag }: Props) {
  const tagStyles = {
    best: "text-indigo-600 bg-violet-300 bg-opacity-30",
    cheapest: "text-amber-500 bg-amber-200 bg-opacity-30",
  };

  return (
    <div className={`px-3.5 py-1.5 rounded ${tagStyles[tag.type]}`}>
      {tag.label}
    </div>
  );
}
