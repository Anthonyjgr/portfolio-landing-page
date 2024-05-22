import { Link } from "react-router-dom";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link, imagePath }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-1 text-deep-blue`;

    
  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link ? link : ""} target="blank">
        <div className={overlayStyles}>
          <p className="text-2xl font-sans font-bold text-[#181088]">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img
          src={`../assets/${imagePath}.png`}
          alt={imagePath}
          className="px-2 py-2 w-full h-full object-cover"
        />
      </a>
    </motion.div>
  );
};



const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col h-full pt-48 pb-48 items-center justify-center"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-opensans font-black text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">Here some of my projects and collaborations</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-6"
          // className="sm:grid sm:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project
            title="T-Shirts Customizer"
            imagePath="shirts"
            description="An amazing 3D Shirts Customizer"
            link="https://3d-shirt-customizer-mu.vercel.app/"
          />
          <Project
            title="Color Palette Generator for Tailwind CSS"
            imagePath="color_palette"
            description="Struggling to find the perfect color palette for your next design project? Look no further! This innovative tool streamlines the entire process, allowing you to generate color palettes, export the code to tailwind, copy color code and save your favoirites palettes."
            link="https://my.spline.design/untitled-6821fac5a773b2fd66d0bf763ae36c13/ "
          />
          <Project
            title="Soy Empe Personal brand website"
            imagePath="soy_empe_web"
            description="This is an personal brand website, with a well defined user interface and modern responsiveness capabilities. (still in progress)."
            link="https://soy-empe-web.vercel.app/"
          />
          <Project
            title="Wirnet iStation Landing"
            imagePath="wirnet_istation"
            description="Responsive Landing transactional Page with Stripe"
            link="https://kerlink.senzary.com/"
          />
          <Project
            title="Senzary Corporative Page Modules"
            imagePath="iot_modules"
            description="IoT Corporative, clean and mother web design"
            link="https://www.senzary.com/iotlogiq-modules"
          />
          <Project
            title="Senzary Corporative Page Platform"
            imagePath="iot_platform"
            description="IoT Corporative, clean and mother web design"
            link="https://www.senzary.com/iotlogiq-platform"
          />

          <Project
            title="3D Mini Gym"
            imagePath="complex3D"
            description="On this time 3D on the web is gaining protagonism, this is a preview about what can we do together."
            link="https://my.spline.design/miniroomartcopy-8c351e51a3dd05b5f20dc776d42c6bd1/"
          />
          <Link to="/twinmotion">
          <Project
            title="Twinmotion House Render"
            imagePath="twinmotion"
            description="In this project you will see how a floor plan can become in 3D renders by the power of Twinmotion and 3Ds Max"
            link=""
          />
          </Link>
          <Link to="/unreal">
          <Project
            title="Unreal Engine Interactive Render"
            imagePath="unreal"
            description="3D renders are great but 3D Interactive Scenes are just AMAZING. Explor this project and download the DEMO file to see the power of Unreal Engine 4, it is free.!"
            link=""
          />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
