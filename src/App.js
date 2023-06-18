
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage';
import Archive from './pages/Archive';
import HabitDetails from './components/HabitDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/archive' element={<Archive />} />
      <Route path='/habit-detail/:habitId' element={<HabitDetails />} />


    </Routes>
  );
}

export default App;
