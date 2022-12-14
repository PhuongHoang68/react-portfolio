import React, { useState } from 'react'
import Modal from "../Modal";

const PhotoList=({project}) => {
    const [photos] = useState([
        {
          name: 'run-buddy',
          project: 'Front-end',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          
        },
        {
          name: 'note-taker',
          project: 'Front-end',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'zoo-kpr',
          project: 'Full-stack',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'fitness tracker',
            project: 'Full-stack',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    const currentPhotos = photos.filter(
      (photo)=> 
      photo.project.toLowerCase() === project.split(' ')[0].toLowerCase());

    const [currentPhoto, setCurrentPhoto] = useState();

    //updating current photo state
    const toggleModal = ( image, i ) => {
      setCurrentPhoto({...image, index:i});
    }

  return (
    <div>
        <Modal currentPhoto={currentPhoto}/>
        <div className="flex-row">
            {currentPhotos.map((image, i)=> (
                <img
                src={require(`../../assets/small/${image.project}/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={()=> toggleModal(image, i)}
                key={image.name}
                />
            ))}
        </div>
    </div>
  )
}

export default PhotoList;