import { Brick, Hammer, Sofa, Structure } from '../Icons'
import DayCounter from './DayCounter'
import styles from './index.module.scss'

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
      <div className={styles.daycounterBox}>

      <DayCounter/>
      </div>
    </div>
  )
}

export default Timeline
