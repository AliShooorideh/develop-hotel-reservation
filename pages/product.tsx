import Image from "next/image";

export default function Product() {
  return (
    <div>
      <Image
        className="w-full rounded-b-[50px]"
        src={"/images/002.jpg"}
        alt=""
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="px-6">
        <div className="mt-10 flex items-center justify-between">
          <div className="w-3/5">
            <span className="text-xl font-bold text-white">
              Most Luxurious & Paceful Nature Place
            </span>
            <div className="mt-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span className="ml-4 text-xs font-bold text-white opacity-40">
                4.7 Rating
              </span>
            </div>
          </div>
          <div className="h-16 border opacity-40" />
          <Image
            className="h-16 w-16 rounded-xl object-cover "
            src={"/images/002.jpg"}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="my-10">
          <span className="text-xl font-bold text-white">About Place</span>
          <p className="mt-3 text-sm text-white opacity-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id maxime
            nulla ipsum est aut ea eius debitis commodi dolorem. Laboriosam
          </p>
        </div>
        <span className="text-xl font-bold text-white">Our Packages</span>
        <div className="my-5 flex justify-between">
          <div className="flex flex-col items-center rounded-xl bg-gray-900 px-3 py-1">
            <span className="text-sm font-bold text-blue-600">Adults</span>
            <div className="w-full border" />
            <span className="text-sm text-white">02</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-gray-900 px-3 py-1">
            <span className="text-sm font-bold text-blue-600">Child</span>
            <div className="w-full border" />
            <span className="text-sm text-white">00</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-gray-900 px-3 py-1">
            <span className="text-sm font-bold text-blue-600">Night</span>
            <div className="w-full border" />
            <span className="text-sm text-white">02</span>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-gray-900 px-3 py-1">
            <span className="text-sm font-bold text-blue-600">Room</span>
            <div className="w-full border" />
            <span className="text-sm text-white">01</span>
          </div>
        </div>
        <span className="text-xl font-bold text-white">Spacial Facilites</span>
        <div className="mt-5 flex justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-600 pb-1 text-xs font-bold text-blue-600">
              p
            </span>
            <span className="text-xs font-bold text-white opacity-50">
              Free Parking
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-600 text-[8px] font-bold text-blue-600">
              24
            </span>
            <span className="text-xs font-bold text-white opacity-50">
              24H Support
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              />
            </svg>

            <span className="text-xs font-bold text-white opacity-50">
              Free Wifi
            </span>
          </div>
        </div>
        <div className="mt-8 flex justify-between px-10 font-bold">
          <div className="rounded-full bg-gradient-to-r from-purple-700 to-blue-600 p-[2px]">
            <button className="h-9 w-28 rounded-full bg-black text-white">
              Back
            </button>
          </div>
          <button className="rounded-full bg-gradient-to-r from-purple-700 to-blue-600 w-28 h-10 text-white">Book</button>
        </div>
      </div>
    </div>
  );
}
