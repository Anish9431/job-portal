import React from 'react'
import { manageJobsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {

    const navigate = useNavigate()

    return (
        <div className='container p-4 max-w-5xl'>
            <style>{`
                .toggle-checkbox:checked {
                    right: 0;
                    border-color: #2563eb;
                }
                .toggle-checkbox:checked + .toggle-label {
                    background-color: #3b82f6;
                }
            `}</style>
            <div className='overflow-x-auto bg-white shadow-sm rounded-xl border border-gray-100'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50/50'>
                        <tr>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>#</th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>Job Title</th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>Date</th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>Location</th>
                            <th className='px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider'>Applicants</th>
                            <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>Visible</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-100'>
                        {manageJobsData.map((job, index) => (
                            <tr key={index} className='hover:bg-gray-50/30 transition-colors'>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-600'>{index + 1}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800'>{job.title}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    {new Date(job.date).toLocaleDateString()}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{job.location}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-center'>
                                    <span className='bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100'>
                                        {job.applicants}
                                    </span>
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
                                        <input type="checkbox" name="toggle" id={`toggle-${index}`} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer right-4 transition-all duration-300" defaultChecked />
                                        <label htmlFor={`toggle-${index}`} className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-6 flex justify-end'>
                <button onClick={() => navigate('/dashboard/add-job')} className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition shadow-sm font-medium active:scale-95'>
                    Add new job
                </button>
            </div>
        </div>
    )
}

export default ManageJobs
