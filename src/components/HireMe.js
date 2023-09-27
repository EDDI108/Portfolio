import React from 'react'
import Link from 'next/link'
import { CircularText } from './Icons'

const HireMe = () => {
	return (
		<div className='fixed left-center bottom-12 flex items-center justify-center overflow-hidden'>
			<div className='w-45 h-auto flex items-center justify-center relative'>
				<CircularText className={"fill-dark animate-spin-slow"} />
				<Link href='https://omarowsky.e@gmail.com'
					className='flex items-center justify-center absolute left-2 
					bottom-2 -translate-x-1/2 -translate-y-1/2'>
                </Link>
			</div>
		</div>
	)
}

export default HireMe
