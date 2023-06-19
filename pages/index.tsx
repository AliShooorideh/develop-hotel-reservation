import BottomSheet from "@/components/BottomSheet";
import SearchBox from "@/components/SearchBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-20 px-8">
      <SearchBox />
      <div className="my-7 flex justify-center">
        <span className="w-11/12 text-center text-2xl font-bold leading-10 text-white">
          Find Your Favorite Place And visit With Us
        </span>
      </div>
      <Image
        className="w-full rounded-[60px]"
        src={"/images/003.jpg"}
        alt=""
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
      />
      <BottomSheet page="home" />
    </div>
  );
}
