import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {

    const navigate = useNavigate()

    return (
        <div className='border border-gray-200 rounded-lg p-6 hover:bg-white hover:shadow-md transition-all duration-300'>
            <div className='flex items-center justify-between mb-4'>
                <img className='h-8' src={assets.company_icon} alt="" />
            </div>
            <h4 className='font-semibold text-lg text-gray-800 mb-2'>{job.title}</h4>
            <div className='flex items-center gap-3 mt-2 text-xs'>
                <span className='px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-full'>{job.location}</span>
                <span className='px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded-full'>{job.level}</span>
            </div>
            <p className='text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2' dangerouslySetInnerHTML={{ __html: job.description }}></p>
            <div className='flex gap-3 mt-6'>
                <button onClick={() => { navigate(`/applyjob/${job._id || job.id}`); window.scrollTo(0, 0) }} className='flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium text-sm'>Apply now</button>
                <button onClick={() => { navigate(`/applyjob/${job._id || job.id}`); window.scrollTo(0, 0) }} className='px-4 py-2 bg-white text-blue-600 text-sm font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors shadow-sm'>Learn more</button>
            </div>
        </div>
    )
}

export default JobCard