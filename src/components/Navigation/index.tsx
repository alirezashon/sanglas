'use client'
import Image from 'next/image'
import styles from './index.module.scss'
import { useEffect, useRef, useState } from 'react'
import React from 'react'

const sources = [
  '/images/logo.svg',
  '/images/logo1.svg',
  '/images/logo2.svg',
  '/images/logo3.svg',
]
const containerRef = useRef<HTMLDivElement>(null)
const scrollerRef = useRef<HTMLUListElement>(null)
const [start, setStart] = useState<boolean>(false)
const direction = 'left'
const speed: string = 'normal'
useEffect(() => {
  addAnimation()
}, [])

function addAnimation() {
  if (containerRef.current && scrollerRef.current) {
    const scrollerContent = Array.from(scrollerRef.current.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })

    getDirection()
    getSpeed()
    setStart(true)
  }
}

const getDirection = () => {
  if (containerRef.current) {
    const directionValue = direction === 'left' ? 'normal' : 'reverse'
    containerRef.current.style.setProperty(
      '--animation-direction',
      directionValue
    )
  }
}

const getSpeed = () => {
  if (containerRef.current) {
    const duration =
      speed === 'fast' ? '7s' : speed === 'normal' ? '120s' : '180s'
    containerRef.current.style.setProperty('--animation-duration', duration)
  }
}

const Navigation = () => {
  return (
    <div ref={containerRef} className={styles.container}>
      <ul
        ref={scrollerRef}
        className={`${styles.scroller} ${start ? styles.active : ''}`}
      >
        <div className={styles.navigation}>
          {sources.map((src) => (
            <div className={styles.logo}>
              <Image src={src} alt='logo' width={222} height={80} />
            </div>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Navigation
