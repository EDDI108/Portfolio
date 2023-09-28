import React from 'react'
import { motion } from 'framer-motion'

const capitalizeFirstLetter = text => {
	if (text.length === 0) return text
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

const AnimatedText = ({ text, className = '' }) => {
	const quote = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
	}

	const singelWord = {
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	}

	const formattedText = capitalizeFirstLetter(text)
        return (
		    <div className='w-full mx-auto py-5 flex items-center justify-center text-center overflow-hidden '>
			    <motion.h1
				  className={`inline-block w-full text-dark font-bold text-6xl dark:text-light ${className}`}
				  variants={quote}
				  initial='initial'
				  animate='animate'
			        >
				    {formattedText.split(' ').map((word, index) => (
					<motion.span
						  key={word + '-' + index}
						  className='inline-block'
						  variants={singelWord}
					    >
						{word}&nbsp;
					</motion.span>
				    ))}
			    </motion.h1>
		</div>
	)
}

export default AnimatedText
