
import React, { useState } from 'react';
import "./Home.css"

function Home() {

    return (
        <div className='containerHome'>
            <h1 className='titleHome'>Bienvenido!</h1>
            <h2 className='subtitleHome'>Este sitio está destinado a que conozcan mi persona y gran parte de mis trabajos realizados en tecnologia</h2>
            <h3 className='textHome'>Aqui podrás ver mis proyectos en Java Script y After Effects</h3>
            <h3 className='textHome'>Tambien podrás conocer detalles de mi formación, experiencia y expectativas dentro del rubro tecnologia</h3>
            <h3 className='textHome'>Ante cualquier consulta, sugerencia o propuesta no dudes en contactarte conmigo</h3>
        </div>
    );
}

export default Home;