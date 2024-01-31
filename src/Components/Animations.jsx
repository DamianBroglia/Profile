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
                    <VideoCard videoId="KVZBvolfqaU" title="Mumbai Construcciones" />
                    <VideoCard videoId="yZW0XUuD-Vk" title="Ceppi Ferretería" />
                    <VideoCard videoId="REwteZHGtoY" title="Vida Sibarita" />
                    <VideoCard videoId="X-G47PqOQ84" title="Zaida Biccoca" />
                </div>
            }
            {showAnimationEdit &&
                <div className='container'>
                    <VideoCard videoId="X-G47PqOQ84" title="Zaida Biccoca" />
                    <VideoCard videoId="yZW0XUuD-Vk" title="Ceppi Ferretería" />
                    <VideoCard videoId="REwteZHGtoY" title="Vida Sibarita" />
                    <VideoCard videoId="KVZBvolfqaU" title="Mumbai Construcciones" />
                </div>
            }

        </div>

    );
}

export default Animations;