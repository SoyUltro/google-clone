import { useRouter } from "next/router";
import Image from "next/image";

import { useRef } from "react";
import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center ">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          alt="google logo"
        />
        <form
          onSubmit={search}
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none "
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden cursor-pointer sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4" />
          <SearchIcon
            onClick={search}
            className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex"
          />
        </form>
        <Avatar className="ml-auto" url="https://pbs.twimg.com/profile_images/1367846156219387913/OorXyWWC_400x400.jpg" />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
