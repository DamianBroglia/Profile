import React, { useState } from "react";
import profilePhoto from "../Asset/FotoPerfil.jpg"
import "./AboutMe.css"


function AboutMe() {

    const [showAbout, setShowAbout] = useState(false)
    const [showFormation, setShowFormation] = useState(false)
    const [showExperence, setShowExperence] = useState(false)
    const [showHability, setShowHability] = useState(false)
    const [showProyeccion, setShowProyeccion] = useState(false)

    const show = (show) => {
        if (show === "about") {
            setShowAbout(true)
            setShowExperence(false)
            setShowFormation(false)
            setShowHability(false)
            setShowProyeccion(false)
        }
        if (show === "formation") {
            setShowAbout(false)
            setShowExperence(false)
            setShowFormation(true)
            setShowHability(false)
            setShowProyeccion(false)
        }
        if (show === "exp") {
            setShowAbout(false)
            setShowExperence(true)
            setShowFormation(false)
            setShowHability(false)
            setShowProyeccion(false)
        }
        if (show === "hab") {
            setShowAbout(false)
            setShowExperence(false)
            setShowFormation(false)
            setShowHability(true)
            setShowProyeccion(false)
        }
        if (show === "pro") {
            setShowAbout(false)
            setShowExperence(false)
            setShowFormation(false)
            setShowHability(false)
            setShowProyeccion(true)
        }
    }


    return (
        <div className="containerAbout">
            <div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("about")}>
                        <h2 className="title">Algo que contar</h2>
                    </button>
                    {showAbout &&
                        <p className="textAbout">
                            Me llamo Damián Nicolás Broglia pero me dicen "Beto", nací en Casilda, Santa Fe, Argentina el 5 de agosto de 1986.
                            Actualmente recido en Firmat, Santa Fe.<br />
                            Mis estudios primarios los realice en la escuela "Bernardino Rivadavia" nro 212, en un pueblo llamado Los Quirquinchos (donde he vivido
                            la mayor parte de mi vida y donde recide mi familia actualmente) en la provincia de Santa Fe. <br />
                            La escuela secundaria tambien la cursé en Los Quirquinchos, en la EEMPI 8070, exceptuando un año (1ro del Polimodal) que lo cursé en la
                            ciudad de Santa Fe. <br />
                            Al terminar mis estudios secundarios viví un año en Santa Fe, donde estudié "Diseño Gráfico". Por problemas económicos no pude continuar la carrera
                            y regresé a Los Quirquinchos.<br />
                            Despues de un año me mudé a Rosario donde viví 4 años trabajando de mozo mientras estudiaba la carrera de "Composicion Músical".<br />
                            La precaria situacion ecónomica me obligó a volver a Los Quirquinchos donde estudié teatro por 3 años (participando de varias obras
                            además de infinidad de horas de improvisacion) y fuí profesor de guitarra de el "Taller de música y canto Los Quirquinchos" durante 2 años, teniendo
                            a cargo mas de 15 alumnos de entre 6 y 35 años.<br />
                            Desde 2019 recido en Firmat junto a mi pareja y mi hija, nacida el 15 de junio del 2023. Trabajo como encargado de una fabrica de muebles e
                            instrumentos de percusion desde el 2021.<br />
                            Me apasiona la música (toco la guitarra desde los 15 años y he estado en bandas desde mis 18 años) el cine (me encanta Wes Anderson,
                            Cristopher Nolan y los hermanos Cohen ) y la literatura (principalmente Borges y Gabriel García Marquez).<br />
                            Siempre me gustó la tecnologia. Aprendí a usar Corel Draw de forma aoutodidacta y tiempo despues aprendí a usar Adobe After Effects para crear
                            animaciones y editar videos.<br />
                            Me dedique un corto perido de tiempo a trabajar de forma independiente animando logos de empresas y haciendo publicidades para la redes
                            de distintos negocios.
                            En 2023 hice el curso de Full Stack Developer de Henry y desde entonces me he dedicado a trabajar de forma independiente realizar aplicaciones,
                            tomandolo como una practica y una forma de aprender nuevas cosas mientras espero mi oportunidad de formar parte de una empresa.
                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("formation")}>
                        <h2 className="title">Formación</h2>
                    </button>
                    {showFormation &&
                        <p className="textAbout">
                            He terminado el curso de Full Stack Developers de Henry con mas de 700 horas teorico-practicas. <br />
                            Cuento con inumerables horas de cursos online de after Effects. <br />
                            3 años de estudio de teatro con practicas de improvisacion han mejorado muchas de mis habilidades blandas.
                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("exp")}>
                        <h2 className="title">Experiencia</h2>
                    </button>
                    {showExperence &&
                        <p className="textAbout">
                            -PROYECTO INDIVIDUAL HENRY:<br />
                            App destinada a mostrar informacion de las distintas razas de perros, para ello usa una apiDog externay y tambien una base de datos
                            y un backend propios donde guarda la información de los usuarios, las nuevas razas de perros ceradas por los usuarios y su lista de favoritos. <br />
                            -PROYECTO FINAL HENRY (PATAGONIA HORIZONS): <br />
                            Junto a 5 compañeros del curso de Henry desarrollamos un e-commers destinado a la venta de paquetes de turismo en la Patagonia Argentina. <br />
                            -TURNERO (FLOR HASRUN ESTÉTICA Y BIENESTAR): <br />
                            Se trata, quizas, de mi proyecto mas ambicioso hasta la fecha. He creado de forma independiente una app para SO moviles con React Native. <br />
                            Esta app no solo es un turnero donde los usuarios pueden guardar turnos en la estética, tambien cuenta con agenda, estadistícas e información de los usuarios. <br />
                            Tambien cuenta con un sistema de créditos para condicionar los incumplimientos de los turnos.
                            -FÚTBOL PRODE: <br />
                            Otro proyecto individual y ambicioso creado para SO de aplicaciones moviles. <br />
                            Se trata de un juego donde los usuarios compiten a travez de un sistema de puntos asignados por los tipos de aciertos de las predicciones
                            realizadas sobre partidos de futbol reales. <br />
                            Este proyecto se encuentra en un periodo de prueba (lo están testeando amigos y conocidos) y pronto será mi primer proyecto individual abierto al publico
                            en las distintas stores de los SO Android y IOS.<br />
                            <br></br>
                            En After Effects mi experiencia es completamente como trabajador independiente, animando logos para marcas como "Vida Sibarita", "Ceppi", "Mumbai" y
                            haciendo publicidades para empresas como "BelleVille Instituto", "Tany Di Matteo" y otros.
                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("hab")}>
                        <h2 className="title">Habilidades</h2>
                    </button>
                    {showHability &&
                        <p className="textAbout">
                            En el curso de Henry adquirí conocimientos en Java Script, React, Node js, Redux, Express, Sequilize y postgreeSQL. <br />
                            En mi trabajo independiente aprendí elo uso de otras bibliotecas como Cloudinary; Material UI; Moment y otras. <br />
                            Mis habilidades mas fuertes son: mi capacidad de aprendizaje, mi voluntad y fuerza de trabajo, mi creatividad, flexibilidad y mi  buena
                            dispocicion a las criticas
                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("pro")}>
                        <h2 className="title">Proyección</h2>
                    </button>
                    {showProyeccion &&
                        <p className="textAbout">
                            Actualmente me encuetro trabajando como encargado en la fabrica de muebles. Trabajo de 08:00 hs a 15:30 hs. Cuando salgo del trabajo
                            quedo a cargo de mi hija mientras mi pareja trabaja, por lo que el tiempo que tengo para dedicarme a programar es muy escaso ( apenas 1 o 2 
                            horas por dia), pero he descubierto que es mi vocacion y a lo que me quiero dedicar.
                             Por esto mi objetivo es conseguir un trabajo que me permita seguir creciendo en este aspecto. Quiero seguir aprendiendo y adquirir nuevos conocimientos
                             que me permitan ser un mejor programador.
                        </p>
                    }
                </div>


            </div>
            <div>
                <img className="imageProfile" src={profilePhoto} alt="name" />

            </div>
        </div>
    );
}

export default AboutMe;