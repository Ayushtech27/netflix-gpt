import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ {lang[langKey].PLAY}
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          {lang[langKey].MORE_INFO}
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
