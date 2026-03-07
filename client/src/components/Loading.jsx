import React from 'react'

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50/50 backdrop-blur-sm'>
            <div className='flex flex-col items-center gap-4'>
                <div className='relative w-16 h-16'>
                    {/* Animated rings */}
                    <div className='absolute inset-0 border-4 border-blue-100 rounded-full'></div>
                    <div className='absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin'></div>
                </div>
                <p className='text-gray-500 font-medium animate-pulse tracking-wider uppercase text-xs'>Loading</p>
            </div>
        </div>
    )
}

export default Loading