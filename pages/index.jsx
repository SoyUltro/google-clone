import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { useRef } from "react";

import Avatar from "../components/Avatar";
import Footer from "../components/Footer";

import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

const Home = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google</title>
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-200 cursor-pointer" />

          <Avatar url="https://pbs.twimg.com/profile_images/1367846156219387913/OorXyWWC_400x400.jpg" />
        </div>
      </header>

      {/* Body */}
      <form
        className="flex flex-col items-center mt-44 flex-grow"
        onSubmit={search}
      >
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />

        {/* Text Input */}
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button type="submit" className="btn">
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Home;
