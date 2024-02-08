import React from "react";
import "./Footer.css"
import containerSocial from "../Asset/ContainerSocial.png"
import facebook from "../Asset/Facebook.png"
import instagram from "../Asset/Instagram.png"
import linkedin from "../Asset/Linkedin.png"
import gmail from "../Asset/Gmail.png"
import gitHub from "../Asset/GitHub.png"

function Footer() {


    const handleEmailClick = () => {
        window.location.href = 'mailto:dnbdt86@email.com';
    }

        return (
            <div className="containerFooter">
                <p className="titleFoot">Contacto</p>
                <img className='SocialContainer' src={containerSocial} alt="name" />
                <div className="containerSocialButtons">
                    <a href="https://www.facebook.com/DamianBroglia?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <img className='buttonImageFoot' src={facebook} alt="name" />
                    </a>
                    <a href="https://www.instagram.com/damianbroglia/" target="_blank" rel="noopener noreferrer">
                        <img className='buttonImageFoot' src={instagram} alt="name" />
                    </a>
                    <a href="https://www.linkedin.com/in/dami%C3%A1n-broglia-679a46277/" target="_blank" rel="noopener noreferrer">
                        <img className='buttonImageFoot' src={linkedin} alt="name" />
                    </a>
                    <a href="mailto:dnbdt86@email.com" onClick={handleEmailClick} target="_blank" rel="noopener noreferrer">
                        <img className='buttonImageFoot' src={gmail} alt="name" />
                    </a>
                    <a href="https://github.com/DamianBroglia" target="_blank" rel="noopener noreferrer">
                        <img className='buttonImageFoot' src={gitHub} alt="name" />
                    </a>
                </div>
            </div>
        );
    }

    export default Footer;