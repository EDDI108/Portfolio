import { motion } from 'framer-motion';
import React from 'react';

const SkillComponent = ({ name, x, y }) => {
  const motionProps = {
    whileHover: { scale: 1.05 },
    initial: { x: 0, y: 0 },
    whileInView: { x: x, y: y, transition: { duration: 1.5 } },
    viewport: { once: true },
  };

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-4 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold"
      {...motionProps}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
        <>
			<h2 className="font-bold text-7xl mt-50 w-full text-center md:text-5xl md:mt-32">Skills</h2>
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
			lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
			lg:bg-circularLightLg lg:dark:bg-circularDarkLg
			md:bg-circularLightMd md:dark:bg-circularDarkM
			sm:bg-circularLightSm sm:dark:bg-circularDarkSM
			
			">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
				  p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
					whileHover={{ scale: 1.05 }}
				>
					Web
				</motion.div>
				<SkillComponent name="Frontend" x="0vw" y="-23vw" />
				<SkillComponent name="HTML" x="-20vw" y="-16vw" />
                <SkillComponent name="CSS" x="26vw" y="-18vw" />
				<SkillComponent name="JavaScript" x="2vw" y="-15vw" />
				<SkillComponent name="TypeScript" x="-30vw" y="-11vw" />
				<SkillComponent name="Git" x="30vw" y="-5vw" />
				<SkillComponent name="Figma" x="23vw" y="-12vw" />
				<SkillComponent name="React" x="-36vw" y="-4vw" />
				<SkillComponent name="React Native" x="-10vw" y="-6vw"/>
				<SkillComponent name="Vue.js" x="17vw" y="-5vw" />
				<SkillComponent name="Backend" x="0vw" y="7vw" />
				<SkillComponent name="Node.JS" x="-20vw" y="11vw" />
				<SkillComponent name="MongoDB" x="-12vw" y="19vw" />
				<SkillComponent name="Rest" x="12vw" y="18vw" />
				<SkillComponent name="Unit test" x="18vw" y="12vw" />
				<SkillComponent name="Docker" x="0vw" y="25vw" />
			</div>
		</>
	);
};

export default Skills;
