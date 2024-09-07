'use client'
import React, { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const images = [
    { src: '/images/Gallery/g1.svg', title: 'Football Field 1' },
    { src: '/images/Gallery/g2.svg', title: 'Football Field 2' },
    { src: '/images/Gallery/g3.svg', title: 'Tennis & Beach Volleyball Court' },
    { src: '/images/Gallery/g4.svg', title: 'Restaurant' },
    { src: '/images/Gallery/g5.svg', title: 'Restaurant' },
    { src: '/images/Gallery/g6.svg', title: 'Entrance Area' },
    { src: '/images/Gallery/g7.svg', title: 'Parking Area' },
    { src: '/images/Gallery/g8.svg', title: ' Bird’s View' },
    { src: '/images/Gallery/g9.svg', title: ' Bird’s View' },
  ]
  
  
  
  
  
 
 

  return (
    <div className={styles.galleryContainer}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            <div
              className='previous'
              onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
            >
              {'<'}
            </div>
            <h2 className={styles.imageTitle}>
              {images[selectedImageIndex].title}
            </h2>
            <div
              className='next'
              onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
              aria-disabled
            >
              {'>'}
            </div>
          </div>
        </div>
        <Image
          width={1111}
          height={1111}
          className={styles.image}
          src={images[selectedImageIndex].src}
          alt={images[selectedImageIndex].title}
        />

      <div className={styles.bottomSection}>
          {images.map((image, index) => (
            <Image
              key={index}
              className={`${styles.thumbnail} ${
                index === selectedImageIndex ? styles.selected : ''
              }`}
              onClick={() => setSelectedImageIndex(index)}
              width={111}
              height={111}
              src={image.src}
              alt={image.title}
            />
          ))}
      </div>
    </div>
  )
}

export default Gallery
