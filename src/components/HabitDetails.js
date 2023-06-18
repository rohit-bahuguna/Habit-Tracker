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
        <div>
            <section>
                <h1>{habit?.name}</h1>
                <p>{habit?.repeat}</p>
                <p>{habit?.time}</p>
                <p>{habit?.goal}</p>
                <p>{habit?.startDate?.toString()}</p>
            </section>
            <section>
                <img src={habit?.image} alt={habit?.name} />
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
                }} className='border px-5 rounded-full  bg-sky-400 text-xl '>Archive</button>

            </section>

            {
                toggle && <HabitForm id={habitId} />
            }
        </div>
    )
}

export default HabitDetails