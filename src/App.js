import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Frontend/Home';
import About from './pages/Frontend/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
