import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {

    const navigate = useNavigate()

    return (
        <div className='min-h-screen bg-gray-50/30'>

            {/* Navbar for Recruiter */}
            <nav className='fixed top-0 z-10 w-full flex items-center justify-between px-4 sm:px-12 py-3 bg-white border-b shadow-sm'>
                <img onClick={() => navigate('/')} className='h-8 cursor-pointer' src={assets.logo} alt="Logo" />
                <div className='flex items-center gap-3'>
                    <p className='max-sm:hidden font-medium text-gray-600'>Hi! Richard</p>
                    <div className='relative group cursor-pointer'>
                        <img className='w-8 h-8 rounded-full border border-gray-200' src={assets.company_icon} alt="Profile" />
                        <div className='absolute hidden group-hover:block top-full right-0 mt-2 bg-white border border-gray-100 rounded-lg shadow-lg py-2 min-w-[120px]'>
                            <p className='px-4 py-2 hover:bg-gray-50 text-sm'>My Profile</p>
                            <p className='px-4 py-2 hover:bg-gray-50 text-sm'>Logout</p>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='flex pt-[65px]'>

                {/* Sidebar */}
                <div className='fixed left-0 top-[65px] bottom-0 w-20 sm:w-64 bg-white border-r min-h-screen transition-all duration-300'>
                    <div className='flex flex-col pt-6'>
                        <NavLink
                            to={'/dashboard/manage-jobs'}
                            className={({ isActive }) => `flex items-center gap-3 px-6 py-4 transition-all duration-200 group relative
                                ${isActive
                                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}
                        >
                            <img className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${window.location.pathname.includes('manage-jobs') ? 'brightness-75' : 'opacity-70 group-hover:opacity-100'}`} src={assets.home_icon} alt="" />
                            <p className='max-sm:hidden font-medium'>Manage Jobs</p>
                        </NavLink>

                        <NavLink
                            to={'/dashboard/add-job'}
                            className={({ isActive }) => `flex items-center gap-3 px-6 py-4 transition-all duration-200 group relative
                                ${isActive
                                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}
                        >
                            <img className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${window.location.pathname.includes('add-job') ? 'brightness-75' : 'opacity-70 group-hover:opacity-100'}`} src={assets.add_icon} alt="" />
                            <p className='max-sm:hidden font-medium'>Add Job</p>
                        </NavLink>

                        <NavLink
                            to={'/dashboard/view-applications'}
                            className={({ isActive }) => `flex items-center gap-3 px-6 py-4 transition-all duration-200 group relative
                                ${isActive
                                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'}`}
                        >
                            <img className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${window.location.pathname.includes('view-applications') ? 'brightness-75' : 'opacity-70 group-hover:opacity-100'}`} src={assets.person_tick_icon} alt="" />
                            <p className='max-sm:hidden font-medium'>View Applications</p>
                        </NavLink>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className='flex-1 ml-20 sm:ml-64 p-6 sm:p-10'>
                    <div className='animate-in fade-in duration-500'>
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard