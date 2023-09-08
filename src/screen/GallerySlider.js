import React, { useState } from 'react';
import './gallery.css';

const GallerySlider = ({ imageUrls }) => {

  const projects = [
    {
      name: 'Project Name',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
    },
    {
      name: 'Another Project',
      description: 'lorem lorem lorem lorem description lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem'
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const switchProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handleThumbnailHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="container">
      <div className="column slider-column">
        <div className="image-container">
          {imageUrls.map((imageUrl, index) => (
            <div
              className={`thumbnail ${index === hoveredIndex ? 'hovered' : ''}`}
              key={index}
              onMouseEnter={() => handleThumbnailHover(index)}
              onMouseLeave={() => handleThumbnailHover(null)}
            >
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="column">
        <div className="project-container">
          <div onClick={switchProject} className='arrow-right'>
            ⇤
          </div>
          <div className='article'>
            <h2> <span className='icon-circle'>
              ✔️
            </span> {projects[currentIndex].name}</h2>
            <p>{projects[currentIndex].description}</p>
          </div>
          <div onClick={switchProject} className='arrow-left'>
            ⇥
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
