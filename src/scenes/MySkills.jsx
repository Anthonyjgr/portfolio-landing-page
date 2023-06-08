import SkillsBar from "../components/SkillsBar";
import { motion } from "framer-motion";

const MySkills = () => {
  return (
    <section id="skills" className="pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:flex-col md:justify-between md:gap-16  ">
        <motion.div
          className="md:w-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-4 mt-32">
            MY <span className="text-red">SKILLS</span>
          </p>
        </motion.div>
          <SkillsBar />
      </div>
    </section>
  );
};

export default MySkills;
