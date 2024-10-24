import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className='flex justify-center items-center gap-20 min-h-[80vh]'>
            <h1 className="dm-sans desc h-[450px] w-[450px] flex justify-center items-center text-5xl font-bold">
                Hi Folks, This is Abhrajit Gupta
            </h1>

            <div className="borderline h-[310px] w-[310px] flex justify-center items-center rounded-full">
                <Image src={"/abhra.jpg"} priority className="rounded-full" width={300} height={300} alt='github logo' />
            </div>


        </section>
    )
}

export default Intro
