import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id='projects' className='dm-sans flex justify-center items-center flex-col gap-4 min-h-screen mt-10'>
      <h2 className='text-4xl font-bold'>Projects</h2>
      <div className='text-gray-400 text-lg'>Things I have built so far</div>
      <div className="cards flex justify-center items-center flex-wrap max-w-[1000px] gap-10 mt-10">
            <div className="card bg-[#363636] w-[300px] min-h-[400px] rounded-lg text-gray-300 flex flex-col gap-4">
                <div className="projectlogo">
                  <Image src={"/sample.png"} className='invert' width={100} height={100} priority alt='nodejs' />
                </div>
                <div className="projectdesc px-4 flex flex-col gap-2">
                    <h3 className='text-2xl font-semibold'>Project Tile goes here</h3>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem. Labore harum vel, delectus a sequi perferendis ullam necessitatibus esse.</div>
                    <div className='text-sm'>Tech Stack : HTML, CSS, JavaScript</div>
                    <div className="buttons flex justify-between items-center mt-4">
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/link.png"} className='invert' width={15} height={15} priority alt='link' />
                         <span className='text-sm underline'>Live Preview</span>
                       </button>
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/github.png"} className='invert' width={15} height={15} priority alt='github' />
                         <span className='text-sm underline'>View Code</span>
                       </button>
                    </div>
                </div>
            </div>
            <div className="card bg-[#363636] w-[300px] min-h-[400px] rounded-lg text-gray-300 flex flex-col gap-4">
                <div className="projectlogo">
                  <Image src={"/sample.png"} className='invert' width={100} height={100} priority alt='nodejs' />
                </div>
                <div className="projectdesc px-4 flex flex-col gap-2">
                    <h3 className='text-2xl font-semibold'>Project Tile goes here</h3>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem. Labore harum vel, delectus a sequi perferendis ullam necessitatibus esse.</div>
                    <div className='text-sm'>Tech Stack : HTML, CSS, JavaScript</div>
                    <div className="buttons flex justify-between items-center mt-4">
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/link.png"} className='invert' width={15} height={15} priority alt='link' />
                         <span className='text-sm underline'>Live Preview</span>
                       </button>
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/github.png"} className='invert' width={15} height={15} priority alt='github' />
                         <span className='text-sm underline'>View Code</span>
                       </button>
                    </div>
                </div>
            </div>
            <div className="card bg-[#363636] w-[300px] min-h-[400px] rounded-lg text-gray-300 flex flex-col gap-4">
                <div className="projectlogo">
                  <Image src={"/sample.png"} className='invert' width={100} height={100} priority alt='nodejs' />
                </div>
                <div className="projectdesc px-4 flex flex-col gap-2">
                    <h3 className='text-2xl font-semibold'>Project Tile goes here</h3>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem. Labore harum vel, delectus a sequi perferendis ullam necessitatibus esse.</div>
                    <div className='text-sm'>Tech Stack : HTML, CSS, JavaScript</div>
                    <div className="buttons flex justify-between items-center mt-4">
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/link.png"} className='invert' width={15} height={15} priority alt='link' />
                         <span className='text-sm underline'>Live Preview</span>
                       </button>
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/github.png"} className='invert' width={15} height={15} priority alt='github' />
                         <span className='text-sm underline'>View Code</span>
                       </button>
                    </div>
                </div>
            </div>
            <div className="card bg-[#363636] w-[300px] min-h-[400px] rounded-lg text-gray-300 flex flex-col gap-4">
                <div className="projectlogo">
                  <Image src={"/sample.png"} className='invert' width={100} height={100} priority alt='nodejs' />
                </div>
                <div className="projectdesc px-4 flex flex-col gap-2">
                    <h3 className='text-2xl font-semibold'>Project Tile goes here</h3>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem. Labore harum vel, delectus a sequi perferendis ullam necessitatibus esse.</div>
                    <div className='text-sm'>Tech Stack : HTML, CSS, JavaScript</div>
                    <div className="buttons flex justify-between items-center mt-4">
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/link.png"} className='invert' width={15} height={15} priority alt='link' />
                         <span className='text-sm underline'>Live Preview</span>
                       </button>
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/github.png"} className='invert' width={15} height={15} priority alt='github' />
                         <span className='text-sm underline'>View Code</span>
                       </button>
                    </div>
                </div>
            </div>
            <div className="card bg-[#363636] w-[300px] min-h-[400px] rounded-lg text-gray-300 flex flex-col gap-4">
                <div className="projectlogo">
                  <Image src={"/sample.png"} className='invert' width={100} height={100} priority alt='nodejs' />
                </div>
                <div className="projectdesc px-4 flex flex-col gap-2">
                    <h3 className='text-2xl font-semibold'>Project Tile goes here</h3>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem. Labore harum vel, delectus a sequi perferendis ullam necessitatibus esse.</div>
                    <div className='text-sm'>Tech Stack : HTML, CSS, JavaScript</div>
                    <div className="buttons flex justify-between items-center mt-4">
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/link.png"} className='invert' width={15} height={15} priority alt='link' />
                         <span className='text-sm underline'>Live Preview</span>
                       </button>
                       <button className='flex justify-center items-center gap-2'>
                         <Image src={"/github.png"} className='invert' width={15} height={15} priority alt='github' />
                         <span className='text-sm underline'>View Code</span>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
