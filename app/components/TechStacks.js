import React from 'react'
import Image from 'next/image'

const TechStacks = () => {
  return (
    <div>
      <section id='techstacks' className='dm-sans flex justify-center items-center flex-col gap-4 min-h-screen'>
        <h2 className='text-4xl font-bold'>My Tech Stack</h2>
        <div className='text-gray-400 text-lg'>Technologies I have been working with recently</div>
        <div className="flex justify-between items-center flex-wrap gap-20  max-w-[700px] mt-10">
            <div className="stack">
                <Image src={"/html.png"} width={70} height={70} priority alt='html' />
            </div>
            <div className="stack">
                <Image src={"/css.png"} width={70} height={70} priority alt='css' />
            </div>
            <div className="stack">
                <Image src={"/js.png"} width={70} height={70} priority alt='js' />
            </div>
            <div className="stack">
                <Image src={"/nodejs.png"} width={70} height={70} priority alt='nodejs' />
            </div>
            <div className="stack">
                <Image src={"/expressjs.png"} className='invert' width={70} height={70} priority alt='nodejs' />
            </div>
            <div className="stack">
                <Image src={"/mongodb.png"} width={70} height={70} priority alt='nodejs' />
            </div>
            <div className="stack">
                <Image src={"/socketio.png"} width={70} height={70} priority alt='nodejs' />
            </div>
            <div className="stack">
                <Image src={"/reactjs.png"} width={70} height={70} priority alt='nodejs' />
            </div>
            <div className="stack">
                <Image src={"/nextjs.png"} className='invert' width={70} height={70} priority alt='nodejs' />
            </div>
            <div className="stack">
                <Image src={"/tailwindcss.png"} width={70} height={70} priority alt='nodejs' />
            </div>
        </div>
      </section>
    </div>
  )
}

export default TechStacks
