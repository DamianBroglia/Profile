import React, { useState } from 'react';
import "./Projects.css"
import image1 from "../../Asset/DogApp1.png"
import image2 from "../../Asset/DogApp2.png"
import image3 from "../../Asset/DogApp3.png"
import image4 from "../../Asset/DogApp4.png"


function DogApp() {

    const imageArray = [image1, image2, image3, image4]
    const [numberImage, setNumberImage] = useState(0)

    return (
        <div >
            <h1 className='title'>DogsApp</h1>
            <div className='containerResumen'>
            <h3 className='title'>Proyecto individual de la carrera full stack developer de Henry. DEsta app consigue la informacion de una api llamada TheDogsApi, 
            y guarda informacion en su propia base de datos.</h3> 
            </div>

            <div className='containerDataContainer'>
                <div className='dataContainerWeb'>
                    <h2 className='title'>Funciones</h2>
                    <ul className='list'>
                        <li>Loguearse o registrarse</li>
                        <li>Ver la información de distintas razas de perros y una imagen de un ejemplar a travez de una card</li>
                        <li>Filtrar y ordenar cards por esperanza de vida, peso y altura</li>
                        <li>Buscar por el nombre de la raza</li>
                        <li>Agregar a una lista de favoritos propia de cada usuario</li>
                        <li>Crear nuevas cards con nuevas razas de perros</li>
                    </ul>
                </div>
                <div className='techContainerWeb'>
                    <h2 className='title'>Tecnologias</h2>
                    <ul className='list'>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node js</li>
                        <li>Express</li>
                        <li>Sequalize</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>

            <div className='captureContainerWeb'>
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
                        <img className='imageLatWeb' src={imageArray[imageArray.length - 1]} />
                        :
                        <img className='imageLatWeb' src={imageArray[numberImage - 1]} />
                    }
                    <img className='imageWeb' src={imageArray[numberImage]} />
                    {numberImage === imageArray.length - 1 ?
                        <img className='imageLatWeb' src={imageArray[0]} />
                        :
                        <img className='imageLatWeb' src={imageArray[numberImage + 1]} />
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

export default DogApp;















