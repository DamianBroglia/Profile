
import React, { useState } from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import imageName from "../Asset/Name.png"
import imageContainerButton from "../Asset/ContainersButtons.png"
import aboutButton from "../Asset/AboutButton.png"
import projectButton from "../Asset/ProjectButton.png"
import AEButton from "../Asset/AEButton.png"


function NavBar() {

  const [aboutMe, setAboutMe] = useState(false)
  const [showProyects, setShowProyects] = useState(false)
  const [showAnimations, setShowAnimations] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className='navbar'>
      <nav className='nav'>
        <img className='logo' src={imageName} alt="name" />
        <img className='imageContainerButtons' src={imageContainerButton} alt="name" />
        <div className='containerButtons'>
          <Link to="/aboutMe">
            <button className='buttons' onMouseEnter={() => setShowAbout(true)} onMouseLeave={() => setShowAbout(false)}>
              <img className='buttonImage' src={aboutButton} alt="name" />
            </button>
          </Link>
          <Link to="/projects">

            <button className='buttons' onMouseEnter={() => setShowProyects(true)} onMouseLeave={() => setShowProyects(false)} >
              <img className='buttonImage' src={projectButton} alt="name" />
            </button>
          </Link>
          <Link to="/animations">
            <button className='buttons' onMouseEnter={() => setShowAnimations(true)} onMouseLeave={() => setShowAnimations(false)}>
              <img className='buttonImage' src={AEButton} alt="name" />
            </button>
          </Link>
        </div>
      </nav>
      {showAbout &&
        <div className='Text'>
          <p className='text'>Conoce mas sobre mi</p>
        </div>
      }
      {showProyects &&
        <div className='Text'>
          <p className='text'>Mira mis proyectos desarrollados en JavaScript</p>
        </div>
      }
      {showAnimations &&
        <div className='Text'>
          <p className='text'>Mira mis animaciones y ediciones de videos realizadas en After Effecs</p>
        </div>
      }



    </div>
  );
}

export default NavBar;