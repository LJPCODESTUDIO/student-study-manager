import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import StudyPlanner from './pages/StudyPlanner';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h3>Study Manager</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/StudyPlanner">Study Planner</Link></li>
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
