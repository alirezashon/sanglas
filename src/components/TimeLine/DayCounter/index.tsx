'use client'
import Image from 'next/image'
import { Sissor } from '../../Icons'
import styles from './index.module.scss'
import { useState } from 'react'

const DayCounter = () => {
  const remainingDays = {
    year: 1,
    month: 7,
    day: 30,
    currentday: '24 Aug 2024',
  }

  return (
    <div className={styles.dayCounter}>
      {/* <Image
        src={'/images/daycounter.svg'}
        alt=''
        width={999}
        height={999}
        className={styles.dayCounterImage}
      /> */}
       <div className={styles.openingDay}>
        <h1>Opening Day</h1>
        <div className=''>{remainingDays.currentday}</div>
      </div>
      <div className={styles.dayCounterDetails}>
        <div className={styles.dayCounterCircle}>
          <p className={styles.remainingValues}>{remainingDays.year}</p>
          <p className={styles.remainingLabels}>year</p>
        </div>
        <div className={styles.dayCounterCircle}>
          <p className={styles.remainingValues}>{remainingDays.month}</p>
          <p className={styles.remainingLabels}>month</p>
        </div>
        <div className={styles.dayCounterCircle}>
          <p className={styles.remainingValues}>{remainingDays.year}</p>
          <p className={styles.remainingLabels}> year</p>
        </div>
      </div>
    </div>
  )
}

export default DayCounter
