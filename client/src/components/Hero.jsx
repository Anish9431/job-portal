import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../contexts/AppContext'

const Hero = () => {
    const { setSearchFilter, setIsSearched } = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onsearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
        console.log({
            title: titleRef.current.value,
            location: locationRef.current.value
        })

    }
    return (
        <div className='container px-4 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 px-8 rounded-xl text-center'>
                <h2 className='text-4xl md:text-5xl font-bold mb-4'>Over 10,000+ jobs to apply</h2>
                <p className='text-sm md:text-base mb-8 max-w-2xl mx-auto'>
                    Your Next Big Career Move Starts Right Here - Explore The Best Job Opportunities And Take The First Step Toward Your Future!
                </p>
                <div className='bg-white rounded-full flex items-center max-w-2xl mx-auto overflow-hidden shadow-lg'>
                    <div className='flex items-center flex-1 border-r border-gray-300 px-4 py-3'>
                        <img src={assets.search_icon} alt="" className='w-5 h-5 mr-2' />
                        <input
                            type="text"
                            placeholder='Search for jobs'
                            className='outline-none w-full text-gray-700 text-sm'
                            ref={titleRef}
                        />
                    </div>
                    <div className='flex items-center flex-1 px-4 py-3'>
                        <img src={assets.location_icon} alt="" className='w-5 h-5 mr-2' />
                        <input
                            type="text"
                            placeholder='Location'
                            className='outline-none w-full text-gray-700 text-sm'
                            ref={locationRef}
                        />
                    </div>
                    <button onClick={onsearch} className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-medium'>
                        Search
                    </button>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className='flex items-center justify-center gap-8 flex-wrap border-y border-gray-200 py-6 mt-10'>
                <p className='text-gray-600 font-medium'>Trusted by</p>
                <img src={assets.microsoft_logo} alt="Microsoft" className='h-6' />
                <img src={assets.walmart_logo} alt="Walmart" className='h-6' />
                <img src={assets.accenture_logo} alt="Accenture" className='h-6' />
            </div>
        </div>
    )
}

export default Hero