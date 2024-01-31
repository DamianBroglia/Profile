import React from 'react';
import "./Projects.css"
import { Link } from 'react-router-dom';
import ProjectsCard from './ProjectsCard';
import imageFlorApp from "../Asset/FlorApp.jpg"
import imageFlorApp2 from "../Asset/FlorApp2.jpg"
import imageFlorApp3 from "../Asset/FlorApp3.jpg"
import imageRickAndMorty from "../Asset/RickAndMortyApp.png"
import imageRickAndMorty2 from "../Asset/RickAndMorty02.png"
import imagePatagonia1 from "../Asset/Patagonia1.png"
import imagePatagonia2 from "../Asset/Patagonia2.png"
import imageDogApp1 from "../Asset/DogApp1.png"
import imageDogApp2 from "../Asset/DogApp2.png"

function Projects() {

    return (
        <div className='containerProjects'>
            <Link to="/projects/Turnero">
                <ProjectsCard
                    image1={imageFlorApp}
                    image2={imageFlorApp2}
                    image3={imageFlorApp3}
                    title="Turnero"
                    type="app"
                />
            </Link>

            <Link to="/projects/RickAndMorty">
            <ProjectsCard
                image1={imageRickAndMorty}
                image2={imageRickAndMorty2}
                image3={imageRickAndMorty2}
                title="Rick & Morty App"
                type="web"
            />
            </Link>
            
            <Link to="/projects/Patagonia">
            <ProjectsCard
                image1={imagePatagonia1}
                image2={imagePatagonia2}
                image3={imagePatagonia1}
                title="Patagonia Horizon app"
                type="web"
            />
            </Link>

            <Link to="/projects/DogApp">
            <ProjectsCard
                image1={imageDogApp1}
                image2={imageDogApp2}
                image3={imageDogApp1}
                title="Dogs App"
                type="web"
            />
            </Link>

            <Link to="/projects/FutbolProde">
            <ProjectsCard
                image1={imageRickAndMorty}
                image2={imageRickAndMorty2}
                image3={imageRickAndMorty2}
                title="Futbol Prode"
                type="web"
            />
            </Link>

        </div>
    );
}

export default Projects;