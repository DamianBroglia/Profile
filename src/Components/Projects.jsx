import React from 'react';
import "./Projects.css"
import { Link } from 'react-router-dom';
import ProjectsCard from './ProjectsCard';
import imageFlorApp from "../Asset/FlorApp.jpg"
import imageFlorApp2 from "../Asset/FlorApp2.jpg"
import imageFlorApp3 from "../Asset/FlorApp3.jpg"
import imageRickAndMorty from "../Asset/RickAndMortyApp.png"
import imageRickAndMorty2 from "../Asset/RickAndMorty02.png"
import imageRickAndMorty3 from "../Asset/RickAndMorty03.png"
import imagePatagonia1 from "../Asset/Patagonia1.png"
import imagePatagonia2 from "../Asset/Patagonia2.png"
import imagePatagonia3 from "../Asset/Patagonia3.png"
import imageDogApp1 from "../Asset/DogApp1.png"
import imageDogApp2 from "../Asset/DogApp2.png"
import imageDogApp3 from "../Asset/DogApp3.png"
import imageProde1 from "../Asset/Prode1.jpg"
import imageProde2 from "../Asset/Prode2.jpg"
import imageProde3 from "../Asset/Prode3.jpg"

function Projects() {

    return (

        <div className='containerProjects'>

            <Link to="/projects/FutbolProde">
                <ProjectsCard
                    image1={imageProde1}
                    image2={imageProde2}
                    image3={imageProde3}
                    title="Futbol Prode"
                    type="app"
                />
            </Link>

            <Link to="/projects/Turnero">
                <ProjectsCard
                    image1={imageFlorApp}
                    image2={imageFlorApp2}
                    image3={imageFlorApp3}
                    title="Turnero"
                    type="app"
                />
            </Link>

            <Link to="/projects/Patagonia">
                <ProjectsCard
                    image1={imagePatagonia1}
                    image2={imagePatagonia2}
                    image3={imagePatagonia3}
                    title="Patagonia Horizon app"
                    type="web"
                />
            </Link>

            <Link to="/projects/DogApp">
                <ProjectsCard
                    image1={imageDogApp1}
                    image2={imageDogApp2}
                    image3={imageDogApp3}
                    title="Dogs App"
                    type="web"
                />
            </Link>

            <Link to="/projects/RickAndMorty">
                <ProjectsCard
                    image1={imageRickAndMorty}
                    image2={imageRickAndMorty2}
                    image3={imageRickAndMorty3}
                    title="Rick & Morty App"
                    type="web"
                />
            </Link>

        </div>

    );
}

export default Projects;