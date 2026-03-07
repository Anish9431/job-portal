import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJob = () => {

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('Bangalore')
    const [category, setCategory] = useState('Programming')
    const [level, setLevel] = useState('Beginner Level')
    const [salary, setSalary] = useState(0)

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(() => {
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
            })
        }
    }, [])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmitHandler} className='container p-4 flex flex-col w-full items-start gap-3'>

            <div className='w-full'>
                <p className='mb-2 text-gray-800 font-medium'>Job Title</p>
                <input
                    className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500 transition-all placeholder:text-gray-400'
                    type="text"
                    placeholder='Type here'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    required
                />
            </div>

            <div className='w-full max-w-lg'>
                <p className='my-2 text-gray-800 font-medium'>Job Description</p>
                <div className='overflow-hidden rounded border-2 border-gray-300'>
                    <div ref={editorRef} className='min-h-[200px] bg-white'></div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 w-full sm:gap-8 mt-4'>
                <div>
                    <p className='mb-2 text-gray-800 font-medium'>Job Category</p>
                    <select
                        className='w-full sm:w-40 px-3 py-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500 transition-all bg-white text-gray-500'
                        onChange={e => setCategory(e.target.value)}
                    >
                        {JobCategories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className='mb-2 text-gray-800 font-medium'>Job Location</p>
                    <select
                        className='w-full sm:w-40 px-3 py-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500 transition-all bg-white text-gray-500'
                        onChange={e => setLocation(e.target.value)}
                    >
                        {JobLocations.map((loc, index) => (
                            <option key={index} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className='mb-2 text-gray-800 font-medium'>Job Level</p>
                    <select
                        className='w-full sm:w-40 px-3 py-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500 transition-all bg-white text-gray-500'
                        onChange={e => setLevel(e.target.value)}
                    >
                        <option value="Beginner Level">Beginner Level</option>
                        <option value="Intermediate Level">Intermediate Level</option>
                        <option value="Senior Level">Senior Level</option>
                    </select>
                </div>
            </div>

            <div className='mt-4'>
                <p className='mb-2 text-gray-800 font-medium'>Salary</p>
                <input
                    className='w-full sm:w-40 px-3 py-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500 transition-all placeholder:text-gray-400'
                    min={0}
                    type="Number"
                    placeholder='0'
                    onChange={e => setSalary(e.target.value)}
                />
            </div>

            <button className='w-28 py-2.5 mt-8 bg-black text-white rounded hover:bg-gray-800 transition-all font-medium active:scale-95 shadow-lg active:shadow-inner'>
                ADD
            </button>

        </form>
    )
}

export default AddJob