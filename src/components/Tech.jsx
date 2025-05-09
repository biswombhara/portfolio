import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <p className={`${styles.sectionSubText} `}>My Tech Stack</p>
            <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} className="block xs:hidden" />
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
