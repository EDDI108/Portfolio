
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import project1 from "/public/images/projects/crypto-screener-cover-image.jpg"
import React from 'react'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return(
    <article className='w-full flex items-center justify-between rounded-3xl border 
    border-solid border-dark bg-light shadow-2xl'>
      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer owerflow-hidden rounded-lg'
      >
         <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank">
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github}  target="_blank"><GithubIcon /> </Link>
          <Link href={link}  target="_blank">Visit Project </Link>
        </div>
       
      </div>
      
    
    
    </article>
  )
}
const projects = () => {
  return (
    <>
        <Head>
				<title>Проекты</title>
				<meta name='description' content='any description' />
	    </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Воображение превосходит знания!"/>

                <div className='grid grid-cols-12 gap-24'>
                  <div className='col-span-12'>
                  <FeaturedProject 
                  title="Крипто-скринер"
                  img={project1}
                  summary="
                  Приложение для проверки криптографии
                  Многофункциональное приложение для проверки криптографии, использующее React, Tailwind CSS, Context API, React Router и Recharts. 
                  В нем подробно показаны практически все криптовалюты. Вы можете легко конвертировать цену в вашей
                  местной валюте."
                  link="/"
                  github="/"
                  type="Избранный проект"
                  
                  
                  />
                  </div>
                  <div className='col-span-6'>
                    projects-1
                  </div>
                  <div className='col-span-6'>
                    projects-2
                  </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects