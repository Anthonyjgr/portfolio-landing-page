import React from "react";
import img1 from "../assets/twin_img/1.jpg";
import img2 from "../assets/twin_img/2.jpg";
import img3 from "../assets/twin_img/3.jpg";
import img4 from "../assets/twin_img/4.jpg";
import img5 from "../assets/twin_img/5.jpg";
import img6 from "../assets/twin_img/6.jpg";
import img7 from "../assets/twin_img/7.jpg";
import img8 from "../assets/twin_img/8.jpg";
import img9 from "../assets/twin_img/9.jpg";
import img10 from "../assets/twin_img/10.jpg";
import img11 from "../assets/twin_img/11.jpg";
import img12 from "../assets/twin_img/12.jpg";
import img13 from "../assets/twin_img/13.jpg";
import img14 from "../assets/twin_img/14.jpg";
import img15 from "../assets/twin_img/15.jpg";
import img16 from "../assets/twin_img/16.jpg";
import img17 from "../assets/twin_img/17.jpg";
import img18 from "../assets/twin_img/18.jpg";
import img19 from "../assets/twin_img/19.jpg";
import img20 from "../assets/twin_img/20.jpg";
import max from "../assets/max.svg";
import twin from "../assets/twin.png";

const Twinmotion = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 m-10 py-10">
      <h1
        style={{
          background: "linear-gradient(to right, #17fbff 0%, #178fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "60px",
        }}
      >
        House Render
      </h1>
      <h1 className="text-xl">Technologies used on this Project</h1>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center mx-4 mb-8">
          <img src={twin} alt="img" className="w-14 h-14 mb-2" />
          <p className="text-center text-md">Twinmotion</p>
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
        <img src={img7} alt="img 7" className="w-full max-w-[400px]" />
        <img src={img8} alt="img 8" className="w-full max-w-[400px]" />
        <img src={img9} alt="img 9" className="w-full max-w-[400px]" />
        <img src={img10} alt="img 10" className="w-full max-w-[400px]" />
        <img src={img11} alt="img 11" className="w-full max-w-[400px]" />
        <img src={img12} alt="img 12" className="w-full max-w-[400px]" />
        <img src={img13} alt="img 13" className="w-full max-w-[400px]" />
        <img src={img14} alt="img 14" className="w-full max-w-[400px]" />
        <img src={img15} alt="img 15" className="w-full max-w-[400px]" />
        <img src={img16} alt="img 16" className="w-full max-w-[400px]" />
        <img src={img17} alt="img 17" className="w-full max-w-[400px]" />
        <img src={img18} alt="img 18" className="w-full max-w-[400px]" />
        <img src={img19} alt="img 19" className="w-full max-w-[400px]" />
        <img src={img20} alt="img 20" className="w-full max-w-[400px]" />
      </div>
    </div>
  );
};

export default Twinmotion;
