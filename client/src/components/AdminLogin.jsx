import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../contexts/AppContext'

const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setShowAdminLogin } = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // Here you would typically add your admin login API call
        // For now we'll just close the modal
        setShowAdminLogin(false)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500 shadow-2xl border border-gray-100 min-w-[360px] animate-in fade-in zoom-in duration-300'>
                <h1 className='text-center text-2xl text-neutral-700 font-bold'>Admin Login</h1>
                <p className='text-sm text-center mb-6'>
                    Welcome back! Please sign in to continue
                </p>

                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 hover:border-blue-300 transition-all'>
                    <img src={assets.email_icon} alt="" className='w-4 h-4 opacity-50' />
                    <input className='outline-none text-sm w-full' onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email Id' required />
                </div>
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 hover:border-blue-300 transition-all'>
                    <img src={assets.lock_icon} alt="" className='w-4 h-4 opacity-50' />
                    <input className='outline-none text-sm w-full' onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
                </div>

                <p className='text-sm text-blue-600 mt-4 cursor-pointer hover:underline text-right' >Forgot password?</p>

                <button type='submit' className='bg-blue-600 w-full text-white py-2.5 rounded-full mt-6 shadow-md hover:bg-blue-700 transition-all active:scale-[0.98] font-medium'>
                    Login
                </button>

                <img onClick={() => setShowAdminLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer hover:rotate-90 transition-all duration-300 w-4 h-4 opacity-60 hover:opacity-100' alt="" />

            </form>
        </div>
    )
}

export default AdminLogin
