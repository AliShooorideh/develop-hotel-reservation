import BottomSheet from "@/components/BottomSheet";
import HotelBox from "@/components/HotelBox";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";

export default function Like() {
  return (
    <div>
      <Image
        className="absolute -z-10 w-full rounded-b-[60px]"
        src={"/images/001.jpg"}
        alt=""
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="px-16 pt-40">
        <SearchBox />
      </div>
      <div className="mt-28 grid grid-cols-2 gap-5 px-8">
        <HotelBox
          src={"/images/004.jpg"}
          price={100}
          text="Forius Place"
          subtext="Location Here"
        />
        <HotelBox
          src={"/images/005.jpg"}
          price={250}
          text="Forius Place"
          subtext="Location Here"
        />
        <HotelBox
          src={"/images/006.jpg"}
          price={220}
          text="Forius Place"
          subtext="Location Here"
        />
        <HotelBox
          src={"/images/007.jpg"}
          price={320}
          text="Forius Place"
          subtext="Location Here"
        />
      </div>
      <div className="px-8">
        <BottomSheet page="like" />
      </div>
    </div>
  );
}
