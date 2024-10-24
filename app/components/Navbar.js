import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-end items-center gap-14 py-6 mr-10 dm-sans text-gray-400'>
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                    <Link href={"#techstacks"}><li>Tech Stacks</li></Link>
                    <Link href={"#projects"}><li>Projects</li></Link>
                    <Link href={"#contact"}><li>Contact</li></Link>
                    <li className="icons flex justify-center items-center gap-4">
                        <div className='icon github-icon'>
                            <Link href={"https://github.com/abhrajit2004"} target='_blank'><Image src={"/github.png"} priority className='invert' width={30} height={30} alt='github logo' /></Link>
                        </div>
                        <div className='icon twitter-icon'>
                            <Link href={"https://x.com/abhrajit_gupta"} target='_blank'><Image src={"/twitter.png"} priority className='invert' width={30} height={30} alt='twitter logo' /></Link>
                        </div>
                        <div className='icon linkedin-icon'>
                            <Link href={"https://www.linkedin.com/in/abhrajit-gupta/"} target='_blank'><Image src={"/linkedin.png"} priority className='invert' width={30} height={30} alt='linkedin logo' /></Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
