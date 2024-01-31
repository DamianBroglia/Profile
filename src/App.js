import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/NavBar";
import Projects from "./Components/Projects"
import Animations from "./Components/Animations"
import Footer from "./Components/Footer"
import AboutMe from "./Components/AboutMe"
import RickAndMorty from "./Components/Projects/RickAndMorty"
import Turnero from "./Components/Projects/Turnero"
import DogApp from "./Components/Projects/DogApp"
import Patagonia from "./Components/Projects/Patagonia"
import FutbolProde from "./Components/Projects/FutbolProde"

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} exact />
          <Route path='/projects' element={<Projects />} exact />
          <Route path='/animations' element={<Animations />} exact />
          <Route path='/aboutMe' element={<AboutMe />} exact />
          <Route path='/projects/RickAndMorty' element={<RickAndMorty />} exact />
          <Route path='/projects/Turnero' element={<Turnero />} exact />
          <Route path='/projects/DogApp' element={<DogApp />} exact />
          <Route path='/projects/Patagonia' element={<Patagonia />} exact />
          <Route path='/projects/FutbolProde' element={<FutbolProde />} exact />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
