'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

const floorPlans = [
  {
    src: '/images/floor/Football Field 1.svg',
    label: 'Football Field 1',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Football Field 2.svg',
    label: 'Football Field 2',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Boxing Room.svg',
    label: 'Boxing Room',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Warm-Up Route.svg',
    label: 'Warm-Up Route',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Beach Volleyball Court.svg',
    label: 'Beach Volleyball Court',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Tennis Court.svg',
    label: 'Tennis Court',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Entrance Area.svg',
    label: 'Entrance Area',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Info Area.svg',
    label: 'Info Area',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Spectator Area.svg',
    label: 'Spectator Area',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Changing Room.svg',
    label: 'Changing Room',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Restaurant.svg',
    label: 'Restaurant',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Parking Area.svg',
    label: 'Parking Area',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Fitness Room.svg',
    label: 'Fitness Room',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Bike Parking Area.svg',
    label: 'Bike Parking Area',
    name: 'Floor G',
  },
  {
    src: '/images/floor/Administrative Offices.svg',
    label: 'Administrative Offices',
    name: 'Floor G',
  },
]

const FloorPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(floorPlans[0])

  const handleSelect = (plan: any) => {
    setSelectedPlan(plan)
  }

  return (
    <div className={styles.floorPlanSection}>
      <div className={styles.imageSection}>
        <Image
          className={styles.icon}
          src={selectedPlan.src}
          alt={selectedPlan.name}
          width={999}
          height={333}
        />
        <h2>{selectedPlan.name}</h2>
      </div>
      <div className={styles.map}>
        <h1>Map</h1>
        <div className={styles.buttons}>
          {floorPlans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handleSelect(plan)}
              className={`${
                selectedPlan.label === plan.label && styles.activeButton
              } ${styles.label}`}
            >
              {plan.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FloorPlan
