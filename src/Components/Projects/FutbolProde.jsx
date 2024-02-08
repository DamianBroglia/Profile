import React, { useState } from 'react';
import "./Projects.css"
import image1 from "../../Asset/Prode1.jpg"
import image2 from "../../Asset/Prode2.jpg"
import image3 from "../../Asset/Prode3.jpg"
import image4 from "../../Asset/Prode4.jpg"
import image5 from "../../Asset/Prode5.jpg"
import image6 from "../../Asset/Prode6.jpg"
import image7 from "../../Asset/Prode7.jpg"
import image8 from "../../Asset/Prode8.jpg"
import image9 from "../../Asset/Prode9.jpg"
import image10 from "../../Asset/Prode10.jpg"
import image11 from "../../Asset/Prode11.jpg"
import image12 from "../../Asset/Prode12.jpg"
import image13 from "../../Asset/Prode13.jpg"
import image14 from "../../Asset/Prode14.jpg"
import image15 from "../../Asset/Prode15.jpg"
import image16 from "../../Asset/Prode16.jpg"
import image17 from "../../Asset/Prode17.jpg"

import VideoCard from "../VideoCard";


function Turnero() {

    const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17]
    const [numberImage, setNumberImage] = useState(0)

    return (
        <div >
            <h1 className='title'>Fùtbol Prode</h1>
            <h3 className='title'>Compite con otros asuarios para ver quien hace las mejores predicciones de resultados</h3>
            <div className='containerDataContainer'>

                <div className='dataContainer'>
                    <h2 className='title'>Funciones</h2>
                    <ul className='list'>
                        <p className='subtitle'>SISTEMA DE PUNTOS:</p>
                        <li>Acierto 100% del resultado -Cuando el resultado de la predicción es exactamente igual al resultado real- 20 pts</li>
                        <li>Acierto diferencia -Cuando la diferencia de los goles de la predicción es igual a la diferencia de los goles en el resultado real- -Ej: predicción 2 a 0; real 4 a 2- 15 pts </li>
                        <li>Acierto ganador -Cuando aciertas el ganador del partido pero no con el resultado justo o la diferencia exacta- 10 pts</li>
                        <li>Tambien se puede sumar punto lofrando combos:</li>
                        <li>POCKER: Al acertar 4 o mas resultados exactos por fecha -50 pts-</li>
                        <li>TRIPLETE: Al acertar 3 resultados exactos por fecha -35 pts-</li>
                        <li>DOBLETE: Al acertar 2 resultados exactos por fecha -20 pts-</li>
                        <p className='subtitle'>USUARIO:</p>
                        <li>Crear una cuenta</li>
                        <li>Hacer predicciones en todas las ligas que quiera</li>
                        <li>Ver tabla de posiciones generales</li>
                        <li>Ver tabla de posiciones por fechas individuales</li>
                        <li>Ver tabla de posiciones generales hasta una fecha determinada</li>
                        <li>Ver graficos estadisticos de los aciertos de cada liga</li>
                        <li>Chequear historial de posición y puntos de ligas finalizadas</li>
                        <li>Ver los puntos detallados y los combos de antiguas predicciones</li>
                        <li>Participar de grupos de amigos con una tabla de posiciones particular</li>
                        <p className='subtitle'>ADMINISTRADOR:</p>
                        <li>Crear una liga</li>
                        <li>Cargar fechas y resultados de esa liga -Al cargar los resultados se calcularán automaticamente los puntos de todos los usuarios que hayan realizado predicciones en esa fecha</li>
                        <li>Crear grupos de amigos</li>
                        <li>Invitar a otros usuarios a formar parte de un grupo de amigos</li>
                        <p className='subtitle'>SUPER ADMIN:</p>
                        <li>Mismas funcionalidades que ADMINISTRADOR pero con la posibilidad de cargar 3 ligas</li>
                        <p className='subtitle'>GOLDEN ADMIN:</p>
                        <li>Mismas funcionalidades que ADMINISTRADOR pero con la posibilidad de cargar una cantidad ilimitada de ligas</li>
                        <li>Dar la cualidad de ADMINISTRADOR/SUPER ADMIN/GOLDEN ADMIN a otros usuarios de la app</li>

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
                                <li>Express</li>
                                <li>PostgreSQL</li>
                                <li>Expo</li>
                            </ul>
                        </div>

                    </div>
                    <VideoCard videoId="Ole_LFelw_s" title="Futbol Prode App Video" />
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

export default Turnero;