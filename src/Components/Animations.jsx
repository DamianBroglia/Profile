import React, { useState } from 'react';
import VideoCard from './VideoCard';
import "./Animations.css"

function Animations() {

    const [showAnimationLogo, setShowAnimationLogo] = useState(true)
    const [showAnimation, setShowAnimation] = useState(false)
    const [showAnimationEdit, setShowAnimationEdit] = useState(false)

    const showVideos = (show) => {
        if (show === "logo") {
            setShowAnimationLogo(true)
            setShowAnimation(false)
            setShowAnimationEdit(false)
        }
        if (show === "animation") {
            setShowAnimationLogo(false)
            setShowAnimation(true)
            setShowAnimationEdit(false)
        }
        if (show === "edit") {
            setShowAnimationLogo(false)
            setShowAnimation(false)
            setShowAnimationEdit(true)
        }
    }

    return (
        <div>
            <div className='containerButton'>
                {showAnimationLogo ?
                    <button className='button'>
                        <h4 className='buttonText'>Logos animados</h4>
                    </button>
                    :
                    <button className='buttonNoSelect' onClick={() => showVideos("logo")}>
                        <h4 className='buttonText'>Logos animados</h4>
                    </button>
                }
                {showAnimation ?
                    <button className='button'>
                        <h4 className='buttonText'>Animaciones</h4>
                    </button>
                    :
                    <button className='buttonNoSelect' onClick={() => showVideos("animation")}>
                        <h4 className='buttonText'>Animaciones</h4>
                    </button>
                }
                {showAnimationEdit ?
                    <button className='button'>
                        <h4 className='buttonText'>Videos Editados</h4>
                    </button>
                    :
                    <button className='buttonNoSelect' onClick={() => showVideos("edit")}>
                        <h4 className='buttonText'>Videos Editados</h4>
                    </button>
                }
            </div>
            {showAnimationLogo &&
                <div className='container'>
                    <VideoCard videoId="yZW0XUuD-Vk" title="Ceppi Ferretería" />
                    <VideoCard videoId="REwteZHGtoY" title="Vida Sibarita" />
                    <VideoCard videoId="KVZBvolfqaU" title="Mumbai Construcciones" />
                    <VideoCard videoId="X-G47PqOQ84" title="Zaida Biccoca" />
                </div>
            }
            {showAnimation &&
                <div className='container'>
                    <VideoCard videoId="fIeSEpe9CLY" title="Rock Starts Fight - John vs Michael"/>
                    <VideoCard videoId="oigZkpNatKc" title="Explotando BC" />
                    <VideoCard videoId="tP-rxb1AKVw" title="Rock Starts Fight - Kurt vs Axl"/>
                    <VideoCard videoId="pm_icmdkrGQ" title="Fin de Ciclo" />
                </div>
            }
            {showAnimationEdit &&
                <div className='container'>
                    <VideoCard videoId="XqQ9B3ky1HpM" title="Perros Crotos Video Promo" />
                    <VideoCard videoId="tAT265xFe0Q" title="Voy a perder la cabeza por tu amor" />

                </div>
            }

        </div>

    );
}

export default Animations;