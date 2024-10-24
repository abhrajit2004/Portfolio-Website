import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer id='contact' className='bg-[#363636] w-full dm-sans mt-40 p-6 flex justify-center items-center gap-10'>
            <div className='email'>Email me here - guptaabhrajityt@gmail.com</div>
            <div className="icons flex justify-center items-center gap-4">
                <div className='icon github-icon'>
                    <Link href={"https://github.com/abhrajit2004"} target='_blank'><Image src={"/github.png"} priority className='invert' width={30} height={30} alt='github logo' /></Link>
                </div>
                <div className='icon twitter-icon'>
                    <Link href={"https://x.com/abhrajit_gupta"} target='_blank'><Image src={"/twitter.png"} priority className='invert' width={30} height={30} alt='twitter logo' /></Link>
                </div>
                <div className='icon linkedin-icon'>
                    <Link href={"https://www.linkedin.com/in/abhrajit-gupta/"} target='_blank'><Image src={"/linkedin.png"} priority className='invert' width={30} height={30} alt='linkedin logo' /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
