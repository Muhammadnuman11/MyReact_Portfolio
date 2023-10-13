import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Frontend/Home';
// import About from './pages/Frontend/About';
// import Skills from './pages/Frontend/Skills';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} /> */}
      </Routes>
    </>
  );
}

export default App;
