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
import image10 from "../../Asset/FlorApp10.jpg"
import image11 from "../../Asset/FlorApp11.jpg"
import image12 from "../../Asset/FlorApp12.jpg"
import image13 from "../../Asset/FlorApp13.jpg"
import image14 from "../../Asset/FlorApp14.jpg"
import image15 from "../../Asset/FlorApp15.jpg"
import image16 from "../../Asset/FlorApp16.jpg"
import image17 from "../../Asset/FlorApp17.jpg"
import VideoCard from "../VideoCard";


function Turnero() {

    const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17]
    const [numberImage, setNumberImage] = useState(0)

    return (
        <div >
            <h1 className='title'>Turnero App</h1>
            <h3 className='title'> Aplicación destinada a facilitar la gestión de turnos, datos y estadisticas de un negocio de estética</h3>
            <div className='containerDataContainer'>

                <div className='dataContainer'>
                    <h2 className='title'>Funciones</h2>
                    <ul className='list'>
                        <p className='subtitle'>USUARIO:</p>
                        <li>Crear o modificar una cuenta de usuario</li>
                        <li>Ver los distintos servicios que brinda la estética</li>
                        <li>Elegir notificaciones personalizadas que alerten al usuario cuando un turno está cerca de su fecha</li>
                        <li>Chequear/filtrar turnos pasados, futuros, cumplidos, fallados, etc</li>
                        <li>Solicitar creditos cuando estos se acaben y no tenga turnos futuros</li>
                        <li>Guardar/cancelar un turno para cualquiera de los servicios brindados por la estética</li>
                        <p className='subtitle'>ADMINISTRADOR:</p>
                        <li>Crear/modificar/eliminar servicios</li>
                        <li>Chequear agenda con los turnos guardados</li>
                        <li>Tomar la asistencia de los turnos</li>
                        <li>Verificar usuario -Otorgar los creditos para que pueda empezar a guardar turnos-</li>
                        <li>Hacer Vip a los usuarios -Dichos usuarios no necesitarán creditos para guardar turnos-</li>
                        <li>Otorgar creditos cuando algún usuario lo solicite</li>
                        <li>Acceder a estadisticas entre dos fechas seleccionadas -Ej: ver las ganancias/turnos/sevicios mas solicitados entre el 01/05/23 al 01/06/23-</li>
                        <li>Bloquear turnos para que no puedan ser guardados por los usuarios</li>
                        <li>Bloquear dias para que ningun usuario pueda guardar un turno ese día</li>
                        <li>Ver informacion y estadisticas de los usuarios -Cantidad de turnos, turnos fallados, ganancias producidas-</li>
                        <li>Filtrar usuarios por: mas gastadores, mas turnos sacados, mas turnos cumplidos, etc</li>
                        <p className='subtitle'>SISTEMA DE CREDITOS:</p>
                        <li>Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descontarán esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 48 horas de anticipación tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 48 horas de anticipacion, se le retornará solo 1 de los 2 creditos.
                            Al quedarse sin turnos el usuario no podrá guardar turnos pero podrá solicitar nuevos creditos al administrador, quien acordará la forma de intercambio
                            mas conveniente
                        </li>
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
                                <li>Express</li>
                                <li>PostgreSQL</li>
                                <li>Expo</li>
                                <li>Cloudinary</li>
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

export default Turnero;