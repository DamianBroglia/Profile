import React, { useState } from 'react';
import "./Projects.css"
import image1 from "../../Asset/RickAndMortyApp.png"
import image2 from "../../Asset/RickAndMorty02.png"
import image3 from "../../Asset/RickAndMorty03.png"
import image4 from "../../Asset/RickAndMorty04.png"



function RickAndMorty() {

    const imageArray = [image1, image2, image3, image4]
    const [numberImage, setNumberImage] = useState(0)

    return (
        <div >
            <h1 className='title'>Rick And Morty App</h1>
            <h3 className='title'>Proyecto integrador del curso full stack developer de Henry</h3>
            <div className='containerDataContainer'>
                <div className='dataContainerWeb'>
                    <h2 className='title'>Funciones</h2>
                    <ul className='list'>
                        <li>Ver la información de distintos personajes de la serie Rick and Morty a travez de una card</li> 
                        <li>Filtrar y ordenar por: Especie, Status, Genero.</li>
                        <li>Buscar por el nombre del personaje</li>
                        <li>Agregar a una lista de favoritos</li>
                    </ul>
                </div>
                <div className='techContainerWeb'>
                    <h2 className='title'>Tecnologias</h2>
                    <ul className='list'>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node js</li>
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

export default RickAndMorty;