export interface HotelAmenity {
    icon: string;
    label: string;
}

export interface HotelTag {
    label: string;
    type: 'best' | 'cheapest';
}

export interface HotelPrice {
    original: string;
    discounted: string;
    nights: number;
    occupancy: string;
}

export interface HotelProps {
    name: string;
    address: string;
    distance: string;
    rating: number;
    reviews: number;
    view: string;
    images: {
        main: string;

    };
    amenities: HotelAmenity[];
    tags: HotelTag[];
    price: HotelPrice;
}