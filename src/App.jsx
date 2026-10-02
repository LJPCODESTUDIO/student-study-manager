import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import Home from './pages/Home';
import StudyPlanner from './pages/StudyPlanner';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h3>Study Manager</h3>
        <ul>
          <li><NavLink
            to="/"
            className={({isActive}) => isActive ? "btn disabled" : "btn"}
          >
            Home
          </NavLink></li>
          <li><NavLink
            to="/StudyPlanner"
            className={({isActive}) => isActive ? "btn disabled" : "btn"}
          >
            Study Planner
          </NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/StudyPlanner' element={<StudyPlanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
