import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../contexts/AppContext'

const RecruiterLogin = () => {

    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [image, setImage] = useState(false)

    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)

    const { setShowRecruiterLogin } = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if (state == "Sign Up" && !isTextDataSubmitted) {
            setIsTextDataSubmitted(true)
        }
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
                <h1 className='text-center text-2xl text-neutral-700 font-bold'>Recruiter {state}</h1>
                <p className='text-sm text-center mb-6'>
                    {state === 'Login' ? 'Welcome back! Please sign in to continue' : 'Create your account to get started'}
                </p>
                {state === 'Sign Up' && isTextDataSubmitted
                    ? <>
                        <div className='flex items-center gap-4 my-10'>
                            <label htmlFor="image">
                                <img className='w-16 rounded-full cursor-pointer mt-2 border border-gray-200 p-1' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                                <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden />
                            </label>
                            <p className='text-sm'>Upload Company <br /> Logo</p>
                        </div>
                    </>
                    : <>
                        {state !== 'Login' && (
                            <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 hover:border-blue-300 transition-all'>
                                <img src={assets.person_icon} alt="" className='w-4 h-4 opacity-50' />
                                <input className='outline-none text-sm w-full' onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Company Name' required />
                            </div>
                        )}

                        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 hover:border-blue-300 transition-all'>
                            <img src={assets.email_icon} alt="" className='w-4 h-4 opacity-50' />
                            <input className='outline-none text-sm w-full' onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email Id' required />
                        </div>
                        <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5 hover:border-blue-300 transition-all'>
                            <img src={assets.lock_icon} alt="" className='w-4 h-4 opacity-50' />
                            <input className='outline-none text-sm w-full' onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
                        </div>

                    </>}

                {state === "Login" && <p className='text-sm text-blue-600 mt-4 cursor-pointer hover:underline text-right' >Forgot password?</p>}

                <button type='submit' className='bg-blue-600 w-full text-white py-2.5 rounded-full mt-6 shadow-md hover:bg-blue-700 transition-all active:scale-[0.98] font-medium'>
                    {state === 'Login' ? 'Login' : isTextDataSubmitted ? 'Create Account' : 'Next'}
                </button>

                {
                    state === 'Login'
                        ? <p className='mt-5 text-center text-sm'>Don't have an account? <span className='text-blue-600 cursor-pointer hover:underline font-semibold' onClick={() => setState("Sign Up")}>Sign up</span></p>
                        : <p className='mt-5 text-center text-sm'>Already have an account? <span className='text-blue-600 cursor-pointer hover:underline font-semibold' onClick={() => setState("Login")}>Login</span></p>
                }

                <img onClick={() => setShowRecruiterLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer hover:rotate-90 transition-all duration-300 w-4 h-4 opacity-60 hover:opacity-100' alt="" />

            </form>
        </div>
    )
}

export default RecruiterLogin