import React, { useState } from 'react'


const PhotoList=({project}) => {
    const [photos] = useState([
        {
          name: 'run-buddy',
          project: 'front-end',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          
        },
        {
          name: 'note-taker',
          project: 'front-end',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'zoo-kpr',
          project: 'full-stack',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'fitness tracker',
            project: 'full-stack',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    const currentPhotos = photos.filter((photo)=> photo.project === project);

  return (
    <div>
        <div className="flex-row">
            {currentPhotos.map((image, i)=> (
                <img
                src={require(`../../assets/small/${project}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
                />
            ))}
        </div>
    </div>
  )
}

export default PhotoList;