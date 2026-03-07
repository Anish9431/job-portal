import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ApplyJob = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [jobData, setJobData] = useState(null)

    const { jobs } = useContext(AppContext)

    const fetchJob = async () => {
        const data = jobs.filter(job => job._id === id)
        if (data.length > 0) {
            setJobData(data[0])
        }
    }

    useEffect(() => {
        fetchJob()
    }, [id, jobs])

    // Helper for relative time
    const formatRelativeTime = (date) => {
        const now = new Date();
        const diff = Math.floor((now - new Date(date)) / 1000); // in seconds

        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
        return `${Math.floor(diff / 86400)} days ago`;
    }

    return jobData ? (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='container px-4 2xl:px-20 mx-auto py-10'>
                {/* Job Header Card */}
                <div className='bg-blue-50/50 border border-blue-200 rounded-xl p-8 mb-12 shadow-sm'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
                        <div className='flex flex-col md:flex-row items-center gap-8'>
                            <div className='bg-white p-6 rounded-lg shadow-sm w-32 h-32 flex items-center justify-center border border-blue-100'>
                                <img className='max-h-20 max-w-20 object-contain' src={jobData.companyId.image} alt="" />
                            </div>
                            <div className='text-center md:text-left'>
                                <h1 className='text-3xl font-bold text-gray-800 mb-4'>{jobData.title}</h1>
                                <div className='flex flex-wrap items-center justify-center md:justify-start gap-y-4 gap-x-6 text-gray-600 text-sm font-semibold'>
                                    <span className='flex items-center gap-2'>
                                        <img src={assets.suitcase_icon} alt="" className='w-4 h-4' />
                                        {jobData.companyId.name}
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <img src={assets.location_icon} alt="" className='w-4 h-4' />
                                        {jobData.location}
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <img src={assets.person_icon} alt="" className='w-4 h-4' />
                                        {jobData.level}
                                    </span>
                                    <span className='flex items-center gap-2'>
                                        <img src={assets.money_icon} alt="" className='w-4 h-4' />
                                        CTC: ${jobData.salary / 1000}k
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center md:items-end gap-2'>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-medium transition-all shadow-md active:scale-95'>
                                Apply now
                            </button>
                            <p className='text-gray-500 text-xs font-medium'>
                                Posted {formatRelativeTime(jobData.date)}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                    {/* Left content: Job details */}
                    <div className='md:col-span-2'>
                        <div className='max-w-none text-gray-700'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Job description</h2>
                            <div
                                dangerouslySetInnerHTML={{ __html: jobData.description }}
                                className='mb-12 rich-content [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mt-10 [&_h2]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-4 [&_li]:leading-relaxed [&_p]:mb-4'
                            ></div>

                            <button className='bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-medium transition-all shadow-md active:scale-95'>
                                Apply now
                            </button>
                        </div>
                    </div>

                    {/* Right side: More jobs from this company */}
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-xl font-bold text-gray-800'>More jobs from {jobData.companyId.name}</h2>
                        <div className='space-y-6'>
                            {jobs.filter(job => job.companyId._id === jobData.companyId._id && job._id !== jobData._id).slice(0, 3).map((job, index) => (
                                <div key={index} className='bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all'>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <img className='h-10 w-10 object-contain' src={job.companyId.image} alt="" />
                                    </div>
                                    <h3 className='font-bold text-lg text-gray-800 mb-2'>{job.title}</h3>
                                    <div className='flex gap-2 mb-4'>
                                        <span className='bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-xs font-medium border border-blue-50'>{job.location}</span>
                                        <span className='bg-red-50 text-red-600 px-3 py-1 rounded-md text-xs font-medium border border-red-50'>{job.level}</span>
                                    </div>
                                    <div className='text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed' dangerouslySetInnerHTML={{ __html: job.description.substring(0, 150) + '...' }}></div>
                                    <div className='flex items-center gap-3'>
                                        <button onClick={() => { navigate(`/applyjob/${job._id}`); window.scrollTo(0, 0) }} className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'>Apply now</button>
                                        <button onClick={() => { navigate(`/applyjob/${job._id}`); window.scrollTo(0, 0) }} className='bg-white text-blue-600 text-sm font-medium border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-sm'>Learn more</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    ) : (
        <Loading />
    )
}

export default ApplyJob
