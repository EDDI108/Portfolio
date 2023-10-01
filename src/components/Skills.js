import { motion } from 'framer-motion'
import React from 'react'

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
				  py-3 px-4 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			whileInView={{ x: x, y: y, transition:{duration: 1.5}}}
			transition={{ duration: 1.5 }}
			viewport={{once: true}}
		>
			{name}
		</motion.div>
	)
}

const Skills = () => {
	return (
		<>
			<h2 className="font-bold text-6xl mt-60 w-full text-center md:text-6xl md:mt-32">Skills</h2>
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
				  p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3"
					whileHover={{ scale: 1.01 }}
				>
					Web
				</motion.div>
				<Skill name='HTML' x='-14vw' y='-19vw' />
                <Skill name='CSS' x='10vw' y='-19vw' />
				<Skill name='JavaScript' x='-3vw' y='-18vw' />
				<Skill name='TypeScript' x='-8vw' y='-11vw' />
				<Skill name='Git' x='7vw' y='-14vw' />
				<Skill name='Figma' x='14vw' y='-8vw' />
				<Skill name='ReactJS' x='-18vw' y='-6vw' />
				<Skill name='NextJS' x='-1vw' y='-5vw' />
				<Skill name='Node.JS' x='-10vw' y='5vw' />
				<Skill name='MongoDB' x='-2vw' y='11vw' />
				<Skill name='Rest' x='-15vw' y='13vw' />
				<Skill name='Unit test' x='10vw' y='3vw' />
				<Skill name='Docker' x='15vw' y='14vw' />
			</div>
		</>
	);
};

export default Skills
