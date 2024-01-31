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
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 72 horas de anticipacion tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 72 horas de anticipacion, se le retornará solo 1 de los 2 creditos.
                            Al quedarse sin turnos el usuario no podrá guardar turnos pero podrá solicitar nuevos creditos al administrador, quien acordara la forma de intercambio
                            mas conveniente.
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("formation")}>
                        <h2 className="title">Formación</h2>
                    </button>
                    {showFormation &&
                        <p className="textAbout">
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 72 horas de anticipacion tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 72 horas de anticipacion, se le retornará solo 1 de los 2 creditos.

                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("exp")}>
                        <h2 className="title">Experiencia</h2>
                    </button>
                    {showExperence &&
                        <p className="textAbout">
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 72 horas de anticipacion tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 72 horas de anticipacion, se le retornará solo 1 de los 2 creditos.
                            Al quedarse sin turnos el usuario no podrá guardar turnos pero podrá solicitar nuevos creditos al administrador, quien acordara la forma de intercambio
                            mas conveniente.
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("hab")}>
                        <h2 className="title">Habilidades</h2>
                    </button>
                    {showHability &&
                        <p className="textAbout">
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 72 horas de anticipacion tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 72 horas de anticipacion, se le retornará solo 1 de los 2 creditos.
                            Al quedarse sin turnos el usuario no podrá guardar turnos pero podrá solicitar nuevos creditos al administrador, quien acordara la forma de intercambio
                            mas conveniente.
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                        </p>
                    }
                </div>
                <div className="containerText">
                    <button className="buttonAbout" onClick={() => show("pro")}>
                        <h2 className="title">Proyección</h2>
                    </button>
                    {showProyeccion &&
                        <p className="textAbout">
                            Sistema de creditos: Una vez verificado por parte de el administrador, el usuario recive 4 creditos que podrá utilizar para guardar sus turnos.
                            cada turno tiene un costo de 2 creditos, al guardar el turno se le descuentan esos creditos al usuario. Si dicho usuario cumple con el turno
                            se le retornarán estos creditos, si cancela el turno con mas de 72 horas de anticipacion tambien se le retornarán los creditos. Si falla al turno
                            los creditos no serán retonrnados. En caso de cancelar el turno con menos de 72 horas de anticipacion, se le retornará solo 1 de los 2 creditos.
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