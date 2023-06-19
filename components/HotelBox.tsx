import Image from "next/image";
import { useState } from "react";

interface IProduct {
  src: string;
  price?: number;
  text?: string;
  subtext?: string;
}
export default function HotelBox(item: IProduct) {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          className="h-36 w-36 rounded-3xl object-cover"
          src={item.src}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="absolute top-0 right-5 h-5 w-5">
          <svg
            id="Layer_2"
            data-name="Layer 2"
            fill="#e50050"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13.27 26.1"
          >
            <g id="App_Screen" data-name="App Screen">
              <g id="Screen_2" data-name="Screen 2">
                <polygon
                  className="cls-1"
                  points="13.27 26.1 6.63 20.77 0 26.1 0 0 13.27 0 13.27 26.1"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute bottom-5 left-5 bg-blue-500 px-2 text-sm">
          <span className="font-bold text-white">${item.price}</span>
        </div>
      </div>
      <span className="text-white font-bold text-lg block">{item.text}</span>
      <span className="text-white text-sm opacity-40">{item.subtext}</span>
    </div>
  );
}
