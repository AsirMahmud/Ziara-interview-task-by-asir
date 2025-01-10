import Image from "next/image";
import { HotelCard } from "./components/HotelCard";
import { hotelData } from "./data/hotelData";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <HotelCard
        name={hotelData.name}
        address={hotelData.address}
        distance={hotelData.distance}
        rating={hotelData.rating}
        reviews={hotelData.reviews}
        view={hotelData.view}
        images={hotelData.images}
        amenities={hotelData.amenities}
        tags={hotelData.tags}
        price={hotelData.price}
      />
    </div>
  );
}
