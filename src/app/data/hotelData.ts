import { HotelProps } from "@/app/types/carddata";

export const hotelData: HotelProps = {
    name: "Hotel Golden Palace, Puri",
    address: "VIP Rd, Puri, Odisha-752002",
    distance: "34.32 KM from center",
    rating: 4.5,
    reviews: 23,
    view: "City view",
    images: {
        main: "https://s3-alpha-sig.figma.com/img/f362/43ef/e2333479d532eefaa5b48162386f28a2?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AC~3s8JPSAMI~EftSbfIATYJ4AmvdsRYpuWXgtP7i~J984J~EVpXYEwvmrVcxEOIQSPZH4byraIOGNWpNSss3wOFfNvm9TIvjBXRRlTHdYSyeFb~7K8vfjHiESqYumMz6Pq-tAZwTKwyxaf2Lyvje33wksDugXViKhy2HvWol-oIWgUNLua7NmgCEF9PDEvBL3y~bUN3wGl8i~c1b7VS8csc7GIyERCADPpmV7WakdTO96SnlchiRnP2JGLXgC61B8JDbUfv50Scfy0ujPDHoA~9c~93RcIX6pTrGCZY3SwZngiLuk~LBh5Kg551bAYAv1hiyzNEbQ08Esw2KEgDzQ__",


    },
    amenities: [
        {
            icon: "wifi.svg",
            label: "Free Wifi"
        },
        {
            icon: "swiming.svg",
            label: "Swimming Pool"
        },
        {
            icon: "city.svg",
            label: ""
        }
    ],
    tags: [
        {
            label: "Best",
            type: "best"
        },
        {
            label: "Cheapest",
            type: "cheapest"
        }
    ],
    price: {
        original: "₹ 34,440.87",
        discounted: "₹ 31,440.87",
        nights: 3,
        occupancy: "2 Adult, 2 Child"
    }
};