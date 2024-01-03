import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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

const Project = ({ title, description,link, imagePath }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="blank">
      <div className={overlayStyles}>
        <p className="text-2xl font-sans font-bold text-[#181088]">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={`../assets/${imagePath}.png`} alt={imagePath} className="px-2 py-2"/>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
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
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project title="Wirnet iStation Landing" 
          imagePath="wirnet_istation"
          description="Responsive Landing Page with Stripe button"
          link="https://kerlink.senzary.com/"
          />
          <Project title="Complex Gym SPA" 
          imagePath="complex"
          description="This is a web aplication with a dashboard Admin"
          link="https://pf-complex-gym-henry.vercel.app/"
          />
          <Project title="Save your AI prompts" 
          imagePath="promptopia"
          description="Here you can log in whit google and save and share your propmts for your favotires IA"
          link="https://next-js-fullstack-web-762g084tz-anthonyjgr.vercel.app/"
          />
             <Project title="404 3D Component" 
          imagePath="404"
          description="What would happen if we do something more interesting when the server failed?"
          link="https://my.spline.design/untitled-6821fac5a773b2fd66d0bf763ae36c13/ "
          />
       
          <Project title="3D Mini Gym" 
          imagePath="complex3D"
          description="This is an amazing 3D model on a web. Could you imagine what kind of things we could do with this kind of technology?"
          link="https://my.spline.design/miniroomartcopy-8c351e51a3dd05b5f20dc776d42c6bd1/"
          />
          <Project title="Just a simple HTML & CSS page" 
          imagePath="simpleHtml"
          description="A simple HTML and CSS web site, but it isn't just basic, it is mobile responsive as well"
          link="https://tangerine-starburst-650db4.netlify.app/"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
