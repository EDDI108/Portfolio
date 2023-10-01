import React from 'react'
import Link from 'next/link'
import { CircularText } from './Icons'

const HireMe = () => {
	return (
		<div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto
		md:absolute">
			<div className='w-45 h-auto flex items-center justify-center relative md:w-24'>
				<CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
				
				<Link href='https://omarowsky.e@gmail.com'
					className='flex items-center justify-center absolute left-2 
					bottom-2 -translate-x-1/2 -translate-y-1/2
					dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
					md:w-12 md:h-12 md:text-[10px]
					'>
                </Link>
			</div>
		</div>
	)
}

export default HireMe
