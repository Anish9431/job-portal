import React, { useContext, useEffect, useState } from 'react'

import { assets } from '../assets/assets'
import JobCard from './JobCard'
import { AppContext } from '../contexts/AppContext'


const JobListing = () => {
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedLocation, setSelectedLocation] = useState([])
    const { jobs, searchFilter, setSearchFilter, isSearched } = useContext(AppContext)
    const [showFilter, setShowFilter] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const categories = [
        { name: 'Programming', count: 24 },
        { name: 'Marketing', count: 41 },
        { name: 'Designing', count: 15 },
        { name: 'Accounting', count: 22 },
        { name: 'Analytics', count: 41 }
    ]

    const locations = [
        { name: 'Bangalore', count: 24 },
        { name: 'Hyderabad', count: 41 },
        { name: 'Mumbai', count: 15 },
        { name: 'Chennai', count: 22 },
        { name: 'Analytics', count: 41 }
    ]

    const [filteredJobs, setFilteredJobs] = useState(jobs)

    useEffect(() => {
        const matchesCategory = job => selectedCategory.length === 0 || selectedCategory.includes(job.category)
        const matchesLocation = job => selectedLocation.length === 0 || selectedLocation.includes(job.location)
        const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
        const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

        const newFilteredJobs = jobs.slice().reverse().filter(
            job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
        )

        setFilteredJobs(newFilteredJobs)
        setCurrentPage(1)
    }, [jobs, selectedCategory, selectedLocation, searchFilter])




    return (
        <div className='container px-4 2xl:px-20 mx-auto py-8'>
            <div className='flex flex-col lg:flex-row gap-8'>

                {/* Sidebar */}
                <div className='w-full lg:w-64 flex-shrink-0'>
                    {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                        <>
                            <h3 className='font-semibold text-lg mb-3'>Current Search</h3>
                            <div className='flex items-center gap-2 mb-6'>
                                {searchFilter.title && (
                                    <span className='inline-flex items-center gap-2.5 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium'>
                                        {searchFilter.title}
                                        <img onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                    </span>
                                )}
                                {searchFilter.location && (
                                    <span className='inline-flex items-center gap-2.5 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium'>
                                        {searchFilter.location}
                                        <img onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                    {/* catrgory filter*/}
                    <button onClick={() => setShowFilter(prev => !prev)} className='lg:hidden mb-4 text-blue-600 font-medium'>
                        {showFilter ? "close" : "Filters"}
                    </button>
                    <h3 className={`font-semibold text-lg mb-3 ${showFilter ? '' : 'max-lg:hidden'}`}>Search by Categories</h3>
                    <div className={`space-y-2 mb-6 ${showFilter ? '' : 'max-lg:hidden'}`}>
                        {categories.map((category, index) => (
                            <label key={index} className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox"
                                    className='w-4 h-4 accent-blue-600'
                                    checked={selectedCategory.includes(category.name)}
                                    onChange={() =>
                                        setSelectedCategory(prev =>
                                            prev.includes(category.name)
                                                ? prev.filter(c => c !== category.name)
                                                : [...prev, category.name]
                                        )
                                    }
                                />
                                <span className='text-gray-700'>{category.name} ({category.count})</span>
                            </label>
                        ))}
                    </div>


                    <h3 className={`font-semibold text-lg mb-3 ${showFilter ? '' : 'max-lg:hidden'}`}>Search by Location</h3>
                    <div className={`space-y-2 ${showFilter ? '' : 'max-lg:hidden'}`}>
                        {locations.map((location, index) => (
                            <label key={index} className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox"
                                    className='w-4 h-4 accent-blue-600'
                                    checked={selectedLocation.includes(location.name)}
                                    onChange={() =>
                                        setSelectedLocation(prev =>
                                            prev.includes(location.name)
                                                ? prev.filter(l => l !== location.name)
                                                : [...prev, location.name]
                                        )
                                    }
                                />
                                <span className='text-gray-700'>{location.name} ({location.count})</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className='flex-1' id='job-list'>
                    <h2 className='text-2xl font-bold mb-2'>Latest jobs</h2>
                    <p className='text-gray-600 mb-6'>Get your desired job from top companies</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                        {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
                            <JobCard key={index} job={job} />
                        ))}
                    </div>
                    {/* Pagination */}
                    {filteredJobs.length > 0 && (
                        <div className='flex justify-center items-center gap-2 mt-10'>
                            <a href="#job-list">
                                <img onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} src={assets.left_arrow_icon} alt="" />
                            </a>
                            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
                                <a key={index} href="#job-list">
                                    <button onClick={() => setCurrentPage(index + 1)}
                                        className={`w-10 h-10 flex items-center justify-center border rounded transition
                                        ${currentPage === index + 1
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                                        {index + 1}
                                    </button>
                                </a>
                            ))}
                            <a href="#job-list">
                                <img onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))} src={assets.right_arrow_icon} alt="" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default JobListing
