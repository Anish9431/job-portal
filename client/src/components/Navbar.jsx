import React from 'react'
import { assets } from '../assets/assets'
import { SignedIn, SignedOut, SignInButton, UserButton, useClerk, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const Navbar = () => {
    const { openSignIn } = useClerk()
    const { user } = useUser()
    const navigate = useNavigate()
    const { setShowRecruiterLogin, setShowAdminLogin } = useContext(AppContext)

    return (
        <div className='shadow py-4'>
            <div className='container px-4 2xl:px-28 mx-auto flex justify-between items-center'>
                <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-8 cursor-pointer" />
                <div className='flex gap-4 items-center'>
                    <SignedOut>
                        <button onClick={() => setShowAdminLogin(true)} className='bg-white text-blue-600 border border-blue-200 shadow-sm px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all'>
                            Admin Login
                        </button>
                        <button onClick={() => setShowRecruiterLogin(true)} className='bg-white text-blue-600 border border-blue-200 shadow-sm px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all'>
                            Recruiter Login
                        </button>
                        <SignInButton mode="modal">
                            <button onClick={openSignIn} className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition'>
                                Login
                            </button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <div className='flex items-center gap-4 max-sm:text-xs'>
                            <Link to="/applications" className='text-blue-600 hover:underline'>
                                Applied Jobs
                            </Link>
                            <p className='text-gray-600 max-sm:hidden'>|</p>
                            <p className='text-gray-600 max-sm:hidden'>
                                Hi, {user?.firstName} {user?.lastName}
                            </p>
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}

export default Navbar
