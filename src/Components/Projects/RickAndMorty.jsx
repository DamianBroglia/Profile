import React, { useState } from 'react';
import "./Projects.css"
import image1 from "../../Asset/FlorApp.jpg"
import image2 from "../../Asset/FlorApp2.jpg"
import image3 from "../../Asset/FlorApp3.jpg"
import image4 from "../../Asset/FlorApp4.jpg"
import image5 from "../../Asset/FlorApp5.jpg"
import image6 from "../../Asset/FlorApp6.jpg"
import image7 from "../../Asset/FlorApp7.jpg"
import image8 from "../../Asset/FlorApp8.jpg"
import image9 from "../../Asset/FlorApp9.jpg"
import VideoCard from "../VideoCard";


function RickAndMorty() {

    const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
    const [numberImage, setNumberImage] = useState(0)

    return (
        <div >
            <h1 className='title'>Rick And Morty App</h1>
            <h3 className='title'> Aplicación destinada a facilitar la gestión de turnos, datos y estadisticas de un negocio de estética</h3>
            <div className='containerDataContainer'>

                <div className='dataContainer'>
                    <h2 className='title'>Funciones</h2>
                    <ul className='list'>
                        <li>Crear usuario</li>
                        <li>Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 72 horas de anticipacion tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 72 horas de anticipacion, se le retornará solo 1 de los 2 creditos.
                            Al quedarse sin turnos el usuario no podrá guardar turnos pero podrá solicitar nuevos creditos al administrador, quien acordara la forma de intercambio
                            mas conveniente
                        </li>
                        <li>Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 72 horas de anticipacion tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 72 horas de anticipacion, se le retornará solo 1 de los 2 creditos.
                            Al quedarse sin turnos el usuario no podrá guardar turnos pero podrá solicitar nuevos creditos al administrador, quien acordara la forma de intercambio
                            mas conveniente
                        </li>
                        <li>Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                        </li>
                        <li>Sequilize</li>
                        <li>Redux Toolkit</li>
                    </ul>
                </div>
                <div>
                    <div className='techContainer'>
                        <h2 className='title'>Tecnologias</h2>
                        <div className='containerList'>
                            <ul className='list'>
                                <li>React native</li>
                                <li>Node js</li>
                                <li>Sequilize</li>
                                <li>Redux Toolkit</li>
                            </ul>
                            <ul className='list'>
                                <li>React native</li>
                                <li>Node js</li>
                                <li>Sequilize</li>
                                <li>Redux Toolkit</li>
                            </ul>
                            <ul className='list'>
                                <li>React native</li>
                                <li>Node js</li>
                                <li>Sequilize</li>
                                <li>Redux Toolkit</li>
                            </ul>
                        </div>

                    </div>
                    <VideoCard videoId="UXeG0UWNCTI" title="Flor Hasrun App Video" />
                </div>

            </div>

            <div className='captureContainer'>
                <h2 className='title'>Capturas</h2>
                <div className='imageContainer'>
                    {numberImage === 0 ?
                        <button onClick={() => setNumberImage(imageArray.length - 1)}>
                            <p>-</p>
                        </button>
                        :
                        <button onClick={() => setNumberImage(numberImage - 1)}>
                            <p>-</p>
                        </button>
                    }
                    {numberImage === 0 ?
                        <img className='imageLat' src={imageArray[imageArray.length - 1]} />
                        :
                        <img className='imageLat' src={imageArray[numberImage - 1]} />
                    }
                    <img className='image' src={imageArray[numberImage]} />
                    {numberImage === imageArray.length - 1 ?
                        <img className='imageLat' src={imageArray[0]} />
                        :
                        <img className='imageLat' src={imageArray[numberImage + 1]} />
                    }
                    {numberImage === imageArray.length - 1 ?
                        <button onClick={() => setNumberImage(0)}>
                            <p>+</p>
                        </button>
                        :
                        <button onClick={() => setNumberImage(numberImage + 1)}>
                            <p>+</p>
                        </button>
                    }

                </div>
            </div>

        </div>
    );
}

export default RickAndMorty;