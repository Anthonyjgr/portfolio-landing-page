import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import EnglishResume from "../assets/ANTHONYG-DEV-EN-CV.pdf";
import SpanishResume from "../assets/ANTHONYG-DEV-ES-CV.pdf";

const Landing = ({ setSelectedPage }) => {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 justify-center basis-3/5 z-10 mt-16 md:mt-32 flex ">
        {isAboveLargeScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                    before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-yellow before:z-[-1]"
                  
          >
            <img
              alt="profile"
              className="hover:filter  hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px]  md:max-w-[450px] border-2 border-gray-300"
              src="../assets/Anthony_Color.jpg"
              style={{ filter: 'grayscale(0%)' }}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter  hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] "
            src="../assets/Anthony_Color.jpg"
            style={{ filter: 'grayscale(0%)' }}
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="text-6xl font-opensans z-10 text-center md:text-start">
            Anthony {""}
            <span
              className=" xs:relative text-blue xs:font-semibold z-20 
               before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Guzmán
            </span>
            <p className="mt-10 mb-7 xs:text-[16px] md:text-[18px] text-justify leading-relaxed ">
              Greetings! 👋 I'm a versatile professional, transitioning seamlessly from
              seasoned full-stack developer 👨‍💻 with expertise in 3D web applications and UX/IU 🚀 to
              a dynamic Project Manager. My development philosophy centers around crafting
              applications that embody efficiency, scalability, and user-friendliness. I
              thrive on the challenge of staying abreast of the latest technologies,
              always seeking opportunities to enhance my skills and knowledge in both web
              and, soon, mobile development.
            </p>
          </span>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ dealy: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                    hover:bg-blue hover:text-white transition duration-500 font-opensans text-[18px]"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <button className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center px-10 font-opensans text-[18px]">
              Let's Talk
            </button>
          </AnchorLink>
        </motion.div>

        {/* Donwload resume */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ dealy: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* CV English */}
          <div className="flex flex-col">
            <a href={EnglishResume} download="CV-EN-Anthony-G.pdf">
              <img
                src="../assets/icons8-cv-96.png"
                className="w-20 mb-[-45px]"
                alt="cv-icon"
              />
            </a>
            <p className="font-opensans text-xl font-black mt-12 text-center">English</p>
          </div>
          {/* CV Spanish */}
          <div className="flex flex-col">
            <a href={SpanishResume} download="CV-ES-Anthony-G.pdf">
              <img
                src="../assets/icons8-cv-96.png"
                className="w-20 mb-[-45px]"
                alt="cv-icon"
              />
            </a>
            <p className="font-opensans text-xl font-black mt-12 text-center">Español</p>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ dealy: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
