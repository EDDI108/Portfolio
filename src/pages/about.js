import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/image/profile/profilePic.jpg'
import React from 'react'

const about = () => {
	return (
		<>
			<Head>
				<title>Обо мне</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Страсть питает цель!'
						className='font-serif mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
					/>
					<div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
						<div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
							<h2 className='mb-12 text-3xl font-bold uppercase text-dark/75 dark:text-light/75 xl:text-center 
							md:text-lg sm:text-base xs:text-sm mt-20'>
								Биография
							</h2>
							<p className='font-medium'>
								Привет, я Эдуард Омаровский, веб-разработчик со страстью к
								созданию красивых, функциональных, и ориентированых на
								пользователя цифровых продуктов. Я всегда ищу новые и
								инновационные способы воплотить идеи моих клиентов в жизнь.
							</p>
							<p className='my-4 font-medium'>
								Я считаю, что дизайн и написание кода — это больше, чем просто
								красивое оформление. Это решение проблем и создание интуитивно
								понятного, приятного опыта для пользователей.
							</p>
							<p className='font-medium'>
								Работаю ли я над веб-сайтом или другим цифровым продуктом, я
								всегда приношу свою приверженность превосходному дизайну и
								мышлению, ориентированному на пользователя.
							</p>
							<p className='font-medium'>
								Я с нетерпением жду возможности применить свои навыки и
								творчество к вашему следующему проекту.
							</p>
						</div>
						<div className='col-span-5 relative h-max rounded-2x1 border-solid border-dark bg-light 
						    p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
							<Image
								src={profilePic}
								alt='Me'
								className='rait-full w-full h-auto rounded-2xl'
								priority
							    sizes="(max-width: 768px) 100vw,
							       (max-width: 1200px) 50vw,
							         33vw"
								style={{ maxWidth: '100%'  }}
									
							/>
						</div>
					</div>
					<Skills />
				</Layout>
			</main>
		</>
	)
}

export default about
