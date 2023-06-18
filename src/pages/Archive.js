import React from 'react'
import { useHabitData } from '../contexts/dataContext'
import { Link, useNavigate } from 'react-router-dom'
const Archive = () => {
    const navigate = useNavigate()
    const { archivedHabit, setArchivedHabit } = useHabitData()
    return (
        <div className='grid grid-rows-4 grid-col-4 gap-4' >

            {
                archivedHabit && archivedHabit.map(({ id, name, image }) =>
                    <div className='flex  justify-between   border w-56 bg-gray-200'
                    // onClick={() => {
                    // navigate(`/habit-detail/${id}`)
                    // }}
                    >
                        <h1>{name}</h1>
                        <img src={image} alt={name} className='w-24' />
                    </div>
                )
            }

        </div>
    )
}

export default Archive