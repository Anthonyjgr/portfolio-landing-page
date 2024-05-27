import React from "react";
import javascript from "../assets/JavaScript.svg";
import rect from "../assets/React.svg";
import html from "../assets/HTML5.svg";
import css from "../assets/CSS3.svg";
import tailwind from "../assets/Tailwind-CSS.svg";
import three from "../assets/Three.svg";
import postgres from "../assets/PostgresSQL.svg";
import postman from "../assets/Postman.svg";
import Unreal from "../assets/Unreal-Engine.svg";
import vite from "../assets/Vite copia.js.svg";
import mongo from "../assets/MongoDB.svg";
import valtio from "../assets/valtio.svg";
import express from "../assets/expressjs-icon.svg";
import spline from "../assets/spline.png";
import redux from "../assets/Redux.svg";
import next from "../assets/Next.svg";
import sequalize from "../assets/Sequelize.svg";
import passport from "../assets/passport.svg";
import max from "../assets/max.svg";
import figma from "../assets/Figma.svg";

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", src: javascript },
    { name: "React", src: rect },
    { name: "HTML5", src: html },
    { name: "CSS3", src: css },
    { name: "Tailwind CSS", src: tailwind },
    { name: "Vite.js", src: vite },
    { name: "Next.js", src: next },
    { name: "Three.js", src: three },
    { name: "Spline", src: spline },
    { name: "Figma", src: figma },
    { name: "3DS Max", src: max },
    { name: "Redux", src: redux },
    { name: "PostgreSQL", src: postgres },
    { name: "Postman", src: postman },
    { name: "Unreal Engine", src: Unreal },
    { name: "MongoDB", src: mongo },
    { name: "Valtio", src: valtio },
    { name: "Express.js", src: express },
    { name: "Sequelize", src: sequalize },
    { name: "Passport.js", src: passport },
  ];

  return (
    <div className="flex h-fit gap-4 justify-center items-center max-w-[1000px] flex-wrap">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center justify-center mx-4 mb-8"
        >
          <img src={tech.src} alt={tech.name} className="w-14 h-14 mb-2" />
          <p className="text-center text-sm">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
