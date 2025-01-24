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
import jwt from "../assets/jwt.png";
import stripe from "../assets/stripe.png";
import vercel from "../assets/vercel.png";
import node from "../assets/node.png";
import mercadopago from "../assets/mercadopago.webp";

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", src: javascript },
    { name: "NodeJS", src: node },
    { name: "React", src: rect },
    { name: "HTML5", src: html },
    { name: "Vite.js", src: vite },
    { name: "Next.js", src: next },
    { name: "Vercel", src: vercel },
    { name: "Figma", src: figma },
    { name: "CSS", src: css },
    { name: "Tailwind CSS", src: tailwind },
    { name: "Three.js", src: three },
    { name: "Spline", src: spline },
    { name: "3DS Max", src: max },
    { name: "Redux", src: redux },
    { name: "Valtio", src: valtio },
    { name: "Express.js", src: express },
    { name: "JWT", src: jwt },
    { name: "MongoDB", src: mongo },
    { name: "PostgreSQL", src: postgres },
    { name: "Postman", src: postman },
    { name: "Sequelize", src: sequalize },
    { name: "Passport.js", src: passport },
    { name: "Unreal Engine", src: Unreal },
    { name: "Stripe", src: stripe },
  ];

  const mercadopago_img = { name: "Mercadopago", src: mercadopago };

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
      <div
        key={mercadopago_img.name}
        className="flex flex-col items-center justify-center mx-4 mb-8"
      >
        <img src={mercadopago_img.src} alt={mercadopago_img.name} className="h-14 mb-2 rounded-md p-1 bg-white" />
        <p className="text-center text-sm">{mercadopago_img.name}</p>
      </div>
    </div>
  );
};

export default TechStack;
