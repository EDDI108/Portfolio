import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profilePic.jpg'
import React from 'react'

const about = () => {
	return (
		<>
			<Head>
				<title>Обо мне</title>
				<meta name='description' content='any description' />
			</Head>
			<main className='flex w-full flex-col items-center justify-center'>
				<Layout className='pt-16'>
					<AnimatedText
						text='Страсть питает цель!'
						className='font-serif mb-1'
					/>
					<div className='grid w-full grid-cols-11 gap-35'>
						<div className='col-span-3 flex flex-col items-start justify-start'>
							<h2 className='mb-12 text-3xl font-bold uppercase text-dark/75 mt-20'>
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
						<div className='col-span-5 relative h-max rounded-2x1 border-solid  '>
							<Image
								src={profilePic}
								alt='Me'
								className='w-full h-auto rounded-2xl '
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
