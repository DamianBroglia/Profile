import React, { useState } from 'react';
import "./Projects.css"
import image1 from "../../Asset/Patagonia1.png"
import image2 from "../../Asset/Patagonia2.png"
import image3 from "../../Asset/Patagonia3.png"




function Patagonia() {

    const imageArray = [image1, image2, image3]
    const [numberImage, setNumberImage] = useState(0)

    return (
        <div >
            <h1 className='title'>Patagonia Horizonts</h1>
            <div className='containerResumen'>
            <h3 className='title'>App desarrollada como proyecto final del curso Full Stack developer de Henry junto a 5 compañeros.
                La app está pensada para hacer mas facil y dinamica la organizacion de vacaciones en la Patagonia. Los usuarios pueden elegir
                y reservar paquetes de turismo pre armados, con distintas actividades para realizar, restautantes donde comer y el hotel donde se hospedarán.
                Tambien pueden armar su carrito con las actividades y el hotel que elijan.</h3>
            </div>

            <div className='containerDataContainer'>
                <div className='dataContainerWeb'>
                    <h2 className='title'>Funciones</h2>
                    <ul className='list'>
                        <p className='subtitle'>USUARIO:</p>
                        <li>Ver los distintos paquetes</li>
                        <li>Comprar un paquete</li>
                        <li>Armar un carrito personalizado</li>
                        <li>Pagar con PayPal o tarjeta</li>
                        <li>Ingresar con una cuenta de la app o con tu cuenta de Google</li>
                        <li>Ver hoteles, restaurantes y actividades</li>
                        <li>Dejar comentarios y puntuaciones a paquetes, hoteles, restaurantes y actividades</li>
                        <li>Filtrar y ordenar paquetes, hoteles, restaurantes y actividades por precio, estrellas, duracion, tipo y rating de los comentarios</li>
                        <li>Buscar paquetes, hoteles, restaurantes y actividades por nombre</li>
                        <li>Ver tus reservas y cancelarlas</li>
                        <p className='subtitle'>ADMINISTRADOR:</p>
                        <li>Crear paquetes, hoteles, restaurantes y actividades</li>
                        <li>Ver las reservas</li>
                        <li>Mandar spam a los usuarios que asi lo requieran</li>
                        <li>mandar avisos sobre las reservas que estan a una semana de la fecha de inicio</li>
                        <li>Borrar paquetes, hoteles, restaurantes y actividades</li>

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

export default Patagonia;

















