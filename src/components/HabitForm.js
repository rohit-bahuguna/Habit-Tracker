import { Input } from 'postcss'
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from "uuid"
import { useHabitData } from '../contexts/dataContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const HabitForm = ({ id }) => {
    const [habit, setHabit] = useState({
        name: "",
        repeat: "",
        time: "",
        goal: "",
        startDate: ''
        , id: uuid(),
        category: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzCxg5R47TjqR7p2D0Za8bYQs8Dl7J51clqb-1WXLQ6jfpoKAFsREX8Wc8Y3FWBYAaqMEGTV0_s8&usqp=CAU&ec=48600112"
    })
    const navigate = useNavigate()
    const getHabitData = (e) => {
        e.preventDefault();
        setHabit({ ...habit, [e.target.name]: e.target.value })
    }
    const { addAHabit, getAHabit, setToggle, editAhabit, moveToArchive } = useHabitData()
    const submitHandler = (e) => {
        e.preventDefault()
        if (e.target.innerText === "Add Habit") {
            addAHabit(habit)
            setToggle(false)

        } else {
            editAhabit(id, habit)
            navigate(-1)
        }
    }

    useEffect(() => {
        if (id) {
            setHabit(getAHabit(id))
        }
    }, [id])


    return (
        <div className='absolute  p-10 flex justify-center align-center  gap-5 top-160 left-1/3 border bg-white w-[40vw] h-[50vh]'>

            <div>
                <h1 className='text-lg font-bold mb-5'>Add New Habit</h1>
                <form className='flex flex-col gap-8'>
                    <label htmlFor="">
                        <span>Name :</span>
                        <input type="text" className='border px-2 rounded-lg' name='name' value={habit.name} onChange={getHabitData} />
                    </label>
                    <div className='flex gap-28'>
                        <label htmlFor="">
                            <span>Repeat : </span>
                            <select name="repeat" value={habit.repeat} onChange={getHabitData}>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="yearly">yearly</option>
                            </select>

                        </label>
                        <label htmlFor="">
                            <span>Goal</span>
                            <select name="goal" id="" className='border rounded-lg px-2' value={habit.goal} onChange={getHabitData}>
                                <option value="1 Time">1 Time</option>
                                <option value="2 Times">2 Times</option>
                                <option value="3 Times">3 Times</option>
                                <option value="5 Times">5 Times</option>
                            </select>

                        </label>
                    </div>
                    <div className='flex gap-16'>
                        <label htmlFor="">
                            <span>Time Of Day : </span>
                            <select name="time" id="" value={habit.time} onChange={getHabitData}>
                                <option value="morning">morning</option>
                                <option value="afternoon">afternoon</option>
                                <option value="evening">evening</option>
                                <option value="night">night</option>
                            </select>

                        </label>
                        <label htmlFor="">
                            <span>Sart Date : </span>
                            <input type="date" name='startDate' value={habit.startDate} onChange={getHabitData} className='border rounded-lg px-2' />

                        </label>
                    </div>
                    <label htmlFor="">
                        <span>category</span>
                        <input type="text" className='border' name="category" onChange={getHabitData} value={habit.category} />
                    </label>

                    <button className='border px-5 rounded-full  bg-sky-400 text-xl ' onClick={submitHandler}>{id ? "Edit Habit" : "Add Habit"}</button>
                    {/* <button className='border px-5 rounded-full  bg-sky-400 text-xl ' onClick={() => {
                        id && setToggle(false)
                    }}>Cancle</button> */}
                </form>
            </div>
        </div>
    )
}

export default HabitForm