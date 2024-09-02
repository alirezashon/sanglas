'use client'
import Image from 'next/image'
import { Brick, Hammer, Sissor, Sofa, Structure } from '../Icons'
import styles from './index.module.scss'
import { useState } from 'react'

const milestones = [
  { month: 'Jan', year: '2023', label: 'Groundbreaking', icon: <Hammer /> },
  { month: 'Mar', year: '2023', label: 'Foundation Done', icon: <Brick /> },
  {
    month: 'Jun',
    year: '2023',
    label: 'Structure Built',
    icon: <Structure />,
  },
  { month: 'Mar', year: '2024', label: 'Interior Ready', icon: <Sofa /> },
]

const Timeline = () => {
  const remainingDays = {
    year: 1,
    month: 7,
    day: 30,
    currentday: '24 Aug 2024',
  }

  return (
    <div className={styles.timeline}>
      {milestones.map((milestone, index) => (
        <div key={index} className={styles.milestone}>
          {milestone.icon}
          <div className={styles.label}>{milestone.label}</div>
          <div
            className={`${styles.circleDate} ${
              index === 0
                ? styles.firstCircleDate
                : index === 1
                ? styles.secondCircleDate
                : index === 2
                ? styles.thirdCircleDate
                : index === 3 && styles.fourthCircleDate
            }`}
          >
            <div className={styles.month}>{milestone.month}</div>
            <div className={styles.year}>{milestone.year}</div>
          </div>
        </div>
      ))}
      <Image
        src={'/images/daycounter.svg'}
        alt=''
        width={999}
        height={999}
        className={styles.dayCounter}
      />
      <div className={styles.sissors}>
        <Sissor />
        <div>Opening Day</div>
      </div>
      <div className={styles.dayCounterDetails}>
        <div className={styles.dayCounterCircle}>
          <p>{remainingDays.year}</p>
          <p>year</p>
        </div>
        <div className={styles.dayCounterCircle}>
          <p>{remainingDays.month}</p>
          <p>month</p>
        </div>
        <div className={styles.dayCounterCircle}>
          <p>{remainingDays.year}</p>
          <p> year</p>
        </div>
      </div>
    </div>
  )
}

export default Timeline
