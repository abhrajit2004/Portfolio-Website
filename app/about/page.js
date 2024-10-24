import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <Navbar />
      <div className="dm-sans p-8 mx-24 flex flex-col gap-6 w-[40vw]">
        <h2 className='text-3xl font-bold'>Work Experience</h2>
        <div className="cards flex flex-col gap-4">

          <div className="card flex items-center justify-between gap-10">
            <div className="role flex flex-col gap-1">
              <span className='text-lg'>Open Source Contributor</span>
              <div className="companydesc flex gap-10">
                <div className="company text-sm text-gray-400">
                  Hacktoberfest
                </div>
                <div className="location text-sm text-gray-400 flex justify-center items-center gap-2">
                  <Image src={"/location.png"} priority className='invert' width={10} height={10} alt='twitter logo' />
                  <span>Github</span>
                </div>
              </div>
            </div>

            <div className="duration flex flex-col text-xs gap-2">
              <div className="time bg-[#D7FFE0] text-[#018C0F] font-bold rounded-full flex justify-center items-center px-4 py-2">
                Part Time
              </div>
              <div className="date flex justify-center items-center gap-2">
                <Image src={"/calendar.png"} priority className='invert' width={12} height={12} alt='twitter logo' />
                <div className='text-gray-400'>Oct 2022 - Oct 2024</div>
              </div>
            </div>
          </div>
          <hr className='mt-2' />

        </div>
      </div>

      <div className="dm-sans p-8 mx-24 flex flex-col gap-6 w-[40vw]">
        <h2 className='text-3xl font-bold'>Education</h2>
        <div className="card flex items-center justify-between gap-10">
          <div className="role flex flex-col gap-1">
            <span className='text-lg'>BTech in Information Technology</span>
            <div className="companydesc flex gap-10">
              <div className="company text-sm text-gray-400">
                Netaji Subhash Engineering College
              </div>
              <div className="location text-sm text-gray-400 flex justify-center items-center gap-2">
                <Image src={"/location.png"} priority className='invert' width={10} height={10} alt='twitter logo' />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>

          <div className="duration flex flex-col text-xs gap-2">
            <div className="time bg-[#D7FFE0] text-[#018C0F] font-bold rounded-full flex justify-center items-center px-4 py-2">
              Full Time
            </div>
            <div className="date flex justify-center items-center gap-2">
              <Image src={"/calendar.png"} priority className='invert' width={12} height={12} alt='twitter logo' />
              <div className='text-gray-400'>Sep 2022 - Sep 2026</div>
            </div>
          </div>
        </div>
        <hr className='mt-2' />

      </div>
      <Footer />
    </>
  )
}

export default page