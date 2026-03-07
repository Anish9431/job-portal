import React from 'react'
import { assets } from '../assets/assets'

const TrustedBy = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto py-8'>
            <div className='flex items-center justify-center gap-8 flex-wrap border-y border-gray-200 py-6'>
                <p className='text-gray-600 font-medium'>Trusted by</p>
                <img src={assets.microsoft_logo} alt="Microsoft" className='h-6' />
                <img src={assets.walmart_logo} alt="Walmart" className='h-6' />
                <img src={assets.accenture_logo} alt="Accenture" className='h-6' />
            </div>
        </div>
    )
}

export default TrustedBy
