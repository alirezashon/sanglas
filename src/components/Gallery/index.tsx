'use client'
import React, { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const images = [
    { src: '/images/dart.svg', title: 'Parking Area' },
    { src: '/images/fire.svg', title: 'Garden Area' },
    { src: '/images/main.svg', title: 'Interior View' },
    { src: '/images/thinker.svg', title: 'Front View' },
    { src: '/images/main.svg', title: 'Aerial View' },
  ]

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.topSection}>
        <h2 className={styles.imageTitle}>
          {images[selectedImageIndex].title}
        </h2>
        <div className={styles.mainImage}>
          <Image
            width={1111}
            height={1111}
            className={styles.images}
            src={images[selectedImageIndex].src}
            alt={images[selectedImageIndex].title}
          />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${
                index === selectedImageIndex ? styles.selected : ''
              }`}
              onClick={() => handleImageClick(index)}
            >
              <Image
                width={111}
                height={111}
                className={styles.thumbnailImage}
                src={image.src}
                alt={image.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
