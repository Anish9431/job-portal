import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className='container px-4 2xl:px-20 mx-auto py-10 mt-20 border-t border-gray-200'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                {/* Logo and Copyright */}
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <img src={assets.logo} alt="Job Portal Logo" className='w-32' />
                    <p className='text-sm text-gray-500'>
                        Copyright © 2026 Job Portal. All rights reserved.
                    </p>
                </div>

                {/* Social Icons */}
                <div className='flex items-center gap-4'>
                    <a href="#" className='hover:opacity-80 transition-opacity'>
                        <img src={assets.facebook_icon} alt="Facebook" className='w-6 h-6' />
                    </a>
                    <a href="#" className='hover:opacity-80 transition-opacity'>
                        <img src={assets.twitter_icon} alt="Twitter" className='w-6 h-6' />
                    </a>
                    <a href="#" className='hover:opacity-80 transition-opacity'>
                        <img src={assets.instagram_icon} alt="Instagram" className='w-6 h-6' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer