import React from 'react'
import { useHabitData } from '../contexts/dataContext'
import { Link } from 'react-router-dom'
import HabitForm from '../components/HabitForm'

const HomePage = () => {
    const { habits, toggle, setToggle } = useHabitData()
    return (
        <>
            <Link to="/archive">
                <button className='border px-5  mt-10 rounded-full  bg-sky-400 text-xl ' >Go To Archive</button></Link>
            <div className='flex gap-10 flex-wrap p-10' >
                <div className='flex  justify-between   border w-56 bg-gray-200'
                    onClick={() => {
                        setToggle(true)
                    }}
                >
                    <h1>Add New Habit</h1>
                    {/* <img src={image} alt={name} className='w-24' /> */}
                </div>
                {
                    habits && habits.map(({ id, name, image }) => <Link to={`habit-detail/${id}`}>
                        <div className='flex  justify-between   border w-56 bg-gray-200'>
                            <h1>{name}</h1>
                            <img src={image} alt={name} className='w-24' />
                        </div>
                    </Link>)
                }

                {
                    toggle && <HabitForm />
                }
            </div></>
    )
}

export default HomePage