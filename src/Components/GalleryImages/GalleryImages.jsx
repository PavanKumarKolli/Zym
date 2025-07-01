import React, { useState } from "react";
import "./GalleryImages.css";
import { FaImage } from "react-icons/fa";



export const GalleryImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  const images = [
    "https://themewagon.github.io/gymlife/img/gallery/gallery-1.jpg",
    "https://themewagon.github.io/gymlife/img/gallery/gallery-2.jpg",
    "https://themewagon.github.io/gymlife/img/gallery/gallery-3.jpg",
    "https://themewagon.github.io/gymlife/img/gallery/gallery-6.jpg",
    "https://themewagon.github.io/gymlife/img/gallery/gallery-4.jpg",
    "https://themewagon.github.io/gymlife/img/gallery/gallery-5.jpg",
  ];

  return (
    <div className="gallery_background_container">
      {selectedImage && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay-content">
            <img src={selectedImage} alt="Selected" className="enlarged-image" />
            <button className="close-button" onClick={handleOverlayClick}>
              X
            </button>
          </div>
        </div>
      )}
      <div className="Gallery_main_container">
        <div className="gallery_firstimg_block">
          <div className="gallery-img-container">
            <img
              className="gallery-img1"
              src={images[0]}
              alt=""
            />
            <button
              className="open-button"
              onClick={() => handleImageClick(images[0])}
            >
              <FaImage size={32}/>
            </button>
          </div>
        </div>
        <div className="gallery_secondimg_block">
          <div className="gallery_secondimg_block1">
            <div className="gallery-img-container">
              <img
                className="gallery-img"
                src={images[1]}
                alt=""
              />
              <button
                className="open-button"
                onClick={() => handleImageClick(images[1])}
              >
                 <FaImage size={32}/>
              </button>
            </div>
          </div>
          <div className="gallery_secondimg_block1">
            <div className="gallery-img-container">
              <img
                className="gallery-img"
                src={images[2]}
                alt=""
              />
              <button
                className="open-button"
                onClick={() => handleImageClick(images[2])}
              >
                 <FaImage size={32}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Gallery_main_container1">
        <div className="gallery_firstimg_block">
          <div className="gallery-img-container">
            <img
              className="gallery-img1"
              src={images[3]}
              alt=""
            />
            <button
              className="open-button"
              onClick={() => handleImageClick(images[3])}
            >
              <FaImage size={32}/>
            </button>
          </div>
        </div>
        <div className="gallery_secondimg_block">
          <div className="gallery_secondimg_block1">
            <div className="gallery-img-container">
              <img
                className="gallery-img"
                src={images[4]}
                alt=""
              />
              <button
                className="open-button"
                onClick={() => handleImageClick(images[4])}
              >
                 <FaImage size={32}/>
              </button>
            </div>
          </div>
          <div className="gallery_secondimg_block1">
            <div className="gallery-img-container">
              <img
                className="gallery-img"
                src={images[5]}
                alt=""
              />
              <button
                className="open-button"
                onClick={() => handleImageClick(images[5])}
              >
                 <FaImage size={32}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
