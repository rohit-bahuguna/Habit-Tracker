import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useHabitData } from '../contexts/dataContext'
import HabitForm from './HabitForm'

const HabitDetails = () => {
    const { habitId } = useParams()
    const navigate = useNavigate()
    const { getAHabit, deleteAhabit, moveToArchive } = useHabitData()
    const [habit, setHabit] = useState({})
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        setHabit(getAHabit(habitId))
    }, [habitId])

    return (
        <div className='flex  justify-center align-center p-16'>
            <div className='border rounded-lg p-5 bg-gray-200 flex flex-col gap-5'>
                <section className='text-center'>
                    <h1 className='text-lg font-bold'>Name : {habit?.name}</h1>
                    <p>Repeat : {habit?.repeat}</p>
                    <p>Time: {habit?.time}</p>
                    <p>Goal : {habit?.goal}</p>
                    <p>Start Time  : {habit?.startDate?.toString()}</p>
                </section>
                <section>
                    <img src={habit?.image} className='w-[10vw] mx-24' alt={habit?.name} />
                </section>
                <section>
                    <button className='border px-5 rounded-full  bg-sky-400 text-xl mr-5' onClick={() => {
                        setToggle(true)
                    }}>Edit</button><button className='border px-5 rounded-full  bg-sky-400 text-xl ' onClick={() => {
                        deleteAhabit(habit?.id)
                        navigate(-1)
                    }}>Delete</button>
                    <button onClick={() => {
                        moveToArchive(habit?.id)
                        navigate(-1)
                    }} className='border px-5  ml-5 rounded-full  bg-sky-400 text-xl '>Archive</button>

                </section>

                {
                    toggle && <HabitForm id={habitId} />
                }
            </div>
        </div>
    )
}

export default HabitDetails