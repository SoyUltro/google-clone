import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { useRef } from "react";

import Avatar from "../components/Avatar";
import Footer from "../components/Footer";

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
    <div className="flex flex-col justify-center h-screen bg-google-100">
      <Head>
        <title>Google</title>
        <link
          rel="icon"
          href="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
        />
      </Head>

      <header className="flex w-full p-5 justify-end text-sm">
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <svg
            className="w-10 h-10 p-2 rounded-full cursor-pointer text-white"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>

          <Avatar url="https://pbs.twimg.com/profile_images/1367846156219387913/OorXyWWC_400x400.jpg" />
        </div>
      </header>

      {/* Body */}
      <form
        className="flex flex-col items-center mt-44 flex-grow"
        onSubmit={search}
      >
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          width={272}
          height={92}
          alt="google logo"
        />

        {/* Text Input */}
        <div className="group flex w-full mt-5 hover:bg-[#303134] focus-within:bg-[##303134] max-w-md rounded-full border border-google-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-google-400" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none bg-google-100 group-hover:bg-[#303134] group-focus-within:bg-[##303134] text-white"
          />
          <svg
            className="h-6"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            ></path>
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
            <path
              fill="#fbbc04"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            ></path>
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            ></path>
          </svg>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button type="submit" className="btn">
            Buscar con Google
          </button>
          <button className="btn">Voy a tener suerte</button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Home;
