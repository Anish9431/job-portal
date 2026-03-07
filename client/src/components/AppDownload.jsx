import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-24 rounded-3xl overflow-hidden shadow-2xl'>
                <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-12'>
                    <div className='max-w-xl text-center md:text-left'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
                            Download Mobile App For Better Experience
                        </h2>
                        <p className='text-blue-100 text-lg mb-10'>
                            Get the best job search experience with our mobile app. Download now to enjoy seamless job browsing, instant applications, and real-time notifications right at your fingertips.
                        </p>
                        <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                            <a href="#" className='hover:scale-105 transition-transform duration-300'>
                                <img src={assets.play_store} alt="Play Store" className='h-12 md:h-14' />
                            </a>
                            <a href="#" className='hover:scale-105 transition-transform duration-300'>
                                <img src={assets.app_store} alt="App Store" className='h-12 md:h-14' />
                            </a>
                        </div>
                    </div>
                    <div className='relative hidden md:block'>
                        <img src={assets.app_main_img} alt="App Mockup" className='w-80 lg:w-96 rounded-2xl shadow-xl' />
                        {/* Decorative elements */}
                        <div className='absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl'></div>
                    </div>
                </div>

                {/* Background Shapes */}
                <div className='absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl'></div>
                <div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl'></div>
            </div>
        </div>
    )
}

export default AppDownload