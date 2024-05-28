import React from "react";
import img1 from "../assets/unreal/1.png";
import img2 from "../assets/unreal/2.png";
import img3 from "../assets/unreal/3.png";
import img4 from "../assets/unreal/4.png";
import img5 from "../assets/unreal/5.png";
import img6 from "../assets/unreal/6.png";
import max from "../assets/max.svg";
import dowload from "../assets/download.png";
import unreal from "../assets/Unreal-Engine.svg";

const Unrealrender = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 m-10 py-10">
      <h1
        style={{
          background: "linear-gradient(to right, #17fbff 0%, #178fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="text-gray-300 text-center text-4xl "
      >
        Kitchen Design Interative Render
      </h1>
      <h1 className="text-xl text-gray-300">Technologies used on this Project</h1>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center mx-4 mb-8">
          <img src={unreal} alt="img" className="w-14 h-14 mb-2" />
          <p className="text-center text-md">Unreal Engine 4</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-4 mb-8">
          <img src={max} alt="img" className="w-14 h-14 mb-2" />
          <p className="text-center text-md">3DS MAX</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 max-w-[1440px]">
        <img src={img1} alt="img 1" className="w-full max-w-[400px]" />
        <img src={img2} alt="img 2" className="w-full max-w-[400px]" />
        <img src={img3} alt="img 3" className="w-full max-w-[400px]" />
        <img src={img4} alt="img 4" className="w-full max-w-[400px]" />
        <img src={img5} alt="img 5" className="w-full max-w-[400px]" />
        <img src={img6} alt="img 6" className="w-full max-w-[400px]" />
      </div>
      <a
        href="https://drive.google.com/file/d/1xlcqqabElilxDaQgn9joUqa2fNBhMwFJ/view?usp=sharing"
        className="text-xl text-blue mt-10 flex flex-col items-center justify-center gap-2"
        target="blank"
      >
        Download Interactive Render Scene <img src={dowload} alt="donwload" />
      </a>
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-gray-300">Instructions:</h1>
        <ul className="text-gray-300">
          <li className="list-disc list-inside">Unzip the rar file</li>
          <li className="list-disc list-inside">Open the unzipped Folder</li>
          <li className="list-disc list-inside">Execute "RealisticRendering.exe"</li>
        </ul>
        <span className="text-gray-300">
          To move around the scene use de KEYS "W , A , S , D" and move the MOUSE to see
          around
        </span>
        <span className="text-gray-500 text-sm">
          Note: This project was compiled for Windows OS therefore it works only on Windows OS.
        </span>
      </div>
    </div>
  );
};

export default Unrealrender;
