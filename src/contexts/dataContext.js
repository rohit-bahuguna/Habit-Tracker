import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { habitData } from '../utils/habitData';

const habitContext = createContext(null);

const useHabitData = () => useContext(habitContext);

const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState();
    const [archivedHabit, setArchivedHabit] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('habits')) == null || JSON.parse(localStorage.getItem('habits')).length == 0) {
            localStorage.setItem('habits', JSON.stringify(habitData))

        }
        if (JSON.parse(localStorage.getItem('archivedHabits')) !== null || JSON.parse(localStorage.getItem('archivedHabits')).length > 0) {
            setArchivedHabit(JSON.parse(localStorage.getItem('archivedHabits')))
        }
        setHabits(JSON.parse(localStorage.getItem('habits')))
        setToggle(false)
    }, [])


    const getAHabit = (habitId) => {
        return habits.find((habit) => habit.id == habitId)
    }

    const addAHabit = (habit) => {
        localStorage.setItem('habits', JSON.stringify([...habits, habit]))
        setHabits([...habits, habit])
    }

    const deleteAhabit = (habitId) => {
        const newHabits = habits.filter(habit => habit.id != habitId)
        localStorage.setItem('habits', JSON.stringify(newHabits))

        setHabits(newHabits)
    }

    const editAhabit = (habitId, habit) => {
        const allHabits = habits.filter(habit => habit.id != habitId)
        localStorage.setItem('habits', JSON.stringify([...allHabits, habit]))

        setHabits([...allHabits, habit])
    }

    const moveToArchive = (habitId) => {
        const archived = habits.find(habit => habit.id == habitId);
        localStorage.setItem('archivedHabits', JSON.stringify([...archivedHabit, archived]))

        const allHabits = habits.filter(habit => habit.id != habitId)
        localStorage.setItem('habits', JSON.stringify(allHabits))
        setHabits(allHabits)
        setArchivedHabit([...archivedHabit, archived])



    }

    return (
        <habitContext.Provider
            value={{ habits, setHabits, toggle, setToggle, getAHabit, addAHabit, deleteAhabit, editAhabit, moveToArchive, archivedHabit, setArchivedHabit }}>
            {children}
        </habitContext.Provider>
    );
};

export { useHabitData, HabitProvider };