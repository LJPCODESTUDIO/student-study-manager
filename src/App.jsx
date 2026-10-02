import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import StudyPlanner from './pages/StudyPlanner';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/StudyPlanner' element={<StudyPlanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
