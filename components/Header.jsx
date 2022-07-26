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
    <header className="sticky top-0 bg-google-100">
      <div className="flex w-full p-6 items-center ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          width={92}
          height={30}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          alt="google logo"
        />
        <form
          onSubmit={search}
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-google-300 bg-google-300 rounded-full max-w-3xl items-center"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none bg-google-300 text-white"
            value={router.query.term}
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-google-400 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden cursor-pointer sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-4" />
          <SearchIcon
            onClick={search}
            className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex"
          />
        </form>
        <Avatar
          className="ml-auto"
          url="https://pbs.twimg.com/profile_images/1367846156219387913/OorXyWWC_400x400.jpg"
        />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;
