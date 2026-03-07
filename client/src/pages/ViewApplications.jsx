import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
    return (
        <div className='container mx-auto p-4 pt-5 max-w-6xl'>
            <div className='bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden'>
                <table className='w-full text-left'>
                    <thead className='bg-gray-50/50 border-b border-gray-100'>
                        <tr>
                            <th className='px-6 py-4 font-semibold text-gray-700 text-sm'>#</th>
                            <th className='px-6 py-4 font-semibold text-gray-700 text-sm'>UserName</th>
                            <th className='px-6 py-4 font-semibold text-gray-700 text-sm'>Job Title</th>
                            <th className='px-6 py-4 font-semibold text-gray-700 text-sm'>Location</th>
                            <th className='px-6 py-4 font-semibold text-gray-700 text-sm'>Resume</th>
                            <th className='px-6 py-4 font-semibold text-gray-700 text-sm'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-50'>
                        {viewApplicationsPageData.map((app, index) => (
                            <tr key={index} className='hover:bg-gray-50/30 transition-colors'>
                                <td className='px-6 py-5 text-sm text-gray-500'>{index + 1}</td>
                                <td className='px-6 py-5'>
                                    <div className='flex items-center gap-3'>
                                        <img className='w-9 h-9 rounded-full border border-gray-100' src={app.imgSrc} alt="" />
                                        <span className='font-medium text-gray-800 text-sm'>{app.name}</span>
                                    </div>
                                </td>
                                <td className='px-6 py-5 text-sm text-gray-600 font-medium'>{app.jobTitle}</td>
                                <td className='px-6 py-5 text-sm text-gray-500'>{app.location}</td>
                                <td className='px-6 py-5'>
                                    <a href="#" className='inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-100 transition-colors border border-blue-100'>
                                        Resume <img className='w-3 h-3' src={assets.resume_download_icon} alt="" />
                                    </a>
                                </td>
                                <td className='px-6 py-5 relative'>
                                    <div className='relative inline-block text-left group'>
                                        <button className='text-gray-400 hover:text-gray-600 px-2 py-1 transition-colors'>
                                            <div className='flex gap-1'>
                                                <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
                                                <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
                                                <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
                                            </div>
                                        </button>
                                        <div className='absolute hidden group-hover:block right-0 top-full -mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 z-10 py-2 animate-in fade-in slide-in-from-top-2 duration-200'>
                                            <button className='w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-colors font-medium'>Accept</button>
                                            <hr className='my-1 border-gray-50' />
                                            <button className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium'>Reject</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewApplications