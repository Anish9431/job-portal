import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import Footer from '../components/Footer'

const Applications = () => {

    const [isEdit, setIsEdit] = useState(false)
    const [resume, setResume] = useState(null)

    return (
        <>
            <Navbar />
            <div className='container px-4 2xl:px-20 mx-auto my-10 min-h-[65vh]'>
                <h2 className='text-xl font-semibold text-gray-800 mb-6'>Your Resume</h2>
                <div className='flex gap-2 mb-10'>
                    {
                        isEdit
                            ? <>
                                <label className='flex items-center' htmlFor="resumeUpload">
                                    <p className='bg-blue-50 text-blue-600 px-4 py-2 rounded-lg cursor-pointer'>Select Resume</p>
                                    <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                                    <img src={assets.profile_upload_icon} alt="" />
                                </label>
                                <button onClick={e => setIsEdit(false)} className='bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg'>Save</button>
                            </>
                            : <div className='flex gap-2'>
                                <a className='bg-blue-50 text-blue-600 px-4 py-2 rounded-lg' href="">
                                    {resume ? resume.name : "resume"}
                                </a>
                                <button onClick={() => setIsEdit(true)} className='bg-white text-blue-600 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-sm'>
                                    Edit
                                </button>
                                <label className='flex items-center gap-2 cursor-pointer' htmlFor="resumeUpload">
                                    <div className='bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center justify-center cursor-pointer transition-all'>
                                        Upload
                                    </div>
                                    <input id='resumeUpload' onChange={e => { setResume(e.target.files[0]); setIsEdit(false) }} accept='application/pdf' type="file" hidden />
                                </label>
                            </div>

                    }

                </div>

                <h2 className='text-xl font-semibold text-gray-800 mb-6'>Jobs Applied</h2>
                <div className='overflow-x-auto rounded-xl border border-gray-100 shadow-sm'>
                    <table className='w-full text-left bg-white'>
                        <thead className='bg-gray-50/50 border-b border-gray-100'>
                            <tr>
                                <th className='py-4 px-6 font-semibold text-gray-700'>Company</th>
                                <th className='py-4 px-6 font-semibold text-gray-700'>Job Title</th>
                                <th className='py-4 px-6 font-semibold text-gray-700'>Location</th>
                                <th className='py-4 px-6 font-semibold text-gray-700'>Date</th>
                                <th className='py-4 px-6 font-semibold text-gray-700'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-50'>
                            {jobsApplied.map((job, index) => (
                                <tr key={index} className='hover:bg-gray-50/50 transition-colors'>
                                    <td className='py-5 px-6'>
                                        <div className='flex items-center gap-4'>
                                            <div className='w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center p-2 border border-gray-100 flex-shrink-0'>
                                                <img className='w-full h-full object-contain' src={job.logo} alt="" />
                                            </div>
                                            <span className='font-medium text-gray-800'>{job.company}</span>
                                        </div>
                                    </td>
                                    <td className='py-5 px-6 font-medium text-gray-600'>{job.title}</td>
                                    <td className='py-5 px-6 text-gray-500'>{job.location}</td>
                                    <td className='py-5 px-6 text-gray-500'>{job.date}</td>
                                    <td className='py-5 px-6'>
                                        <span className={`px-4 py-1.5 rounded-lg text-xs font-semibold
                                            ${job.status === 'Accepted' ? 'bg-green-100 text-green-700 border border-green-200' :
                                                job.status === 'Rejected' ? 'bg-red-100 text-red-700 border border-red-200' :
                                                    'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Applications
