import Link from 'next/link'
import { useState } from 'react'
import Layout from './Layout'
import React from 'react'

const Footer = () => {
	const [isLiked, setIsLiked] = useState(false);
  
	const handleLikeClick = () => {
	  setIsLiked(!isLiked);
	};
  
	return (
	  <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
		<Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
		  <span>{new Date().getFullYear()} &copy; Все права защищены.</span>
		  <div className='flex items-center lg:py-2'>
			Если вам нравится поставьте{' '}
			<span
			  className={`text-blue-500 dark:text-secondary text-2xl px-1 cursor-pointer`}
			  onClick={handleLikeClick}
			>
			  <svg
				viewBox='0 0 28 28'
				fill='none'
				className='feather'
			  >
				<path
				  d='M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 7.5 3 5.84 4.55 4.74 6.11 3.65 8 3 9.5 3c1.5 0 2.89.61 3.89 1.63C14.11 3.61 15.5 3 17 3c1.5 0 3.39 1.65 3.45 1.76 1 1.92 1.91 3.37 1.91 5.24 0 3.75-3.4 6.86-8.55 10.54L12 21.35z'
				  className={isLiked ? 'fill-current text-blue-500' : 'stroke-current text-current'}
				/>
			  </svg>
			</span>
		  </div>
		  <Link href='/'>Здравствуйте</Link>
		</Layout>
  
		<style jsx>{`
		  .feather {
			width: 28px;
			height: 28px;
		  }
		`}</style>
	  </footer>
	);
  };
  
  export default Footer;
