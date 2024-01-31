import React from 'react';
import "./ProjectsCard.css"

const ProjectsCard = ({ image1, image2, image3, title, type }) => {
    return (

        <div className='containerProject'>
            {type === "web" ?
                <div className='containerImageWeb'>
                    <img className='imageWeb1' src={image1} alt='image' />
                    <div>
                        <img className='imageWeb2' src={image2} alt='image' />
                        <img className='imageWeb2' src={image2} alt='image' />
                    </div>
                </div>
                :
                <div className='containerImage'>
                    <img className='image1' src={image1} alt='image' />
                    <div className='containerImage2'>
                        <img className='image2' src={image2} alt='image' />
                        <img className='image2' src={image3} alt='image' />
                    </div>
                </div>
            }
            <h2 className='title'>{title}</h2>
           
        </div>

    );
};

export default ProjectsCard;