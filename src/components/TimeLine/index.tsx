import styles from './index.module.scss'

const Timeline = () => {
  const milestones = [
    { month: 'Jan', year: '2023', label: 'Groundbreaking' },
    { month: 'Mar', year: '2023', label: 'Foundation Done' },
    { month: 'Jun', year: '2023', label: 'Structure Built' },
    { month: 'Mar', year: '2024', label: 'Interior Ready' },
  ]

  return (
    <div className={styles.timeline}>
      {milestones.map((milestone, index) => (
        <div key={index} className={styles.milestone}>
          <div className={styles.month}>{milestone.month}</div>
          <div className={styles.year}>{milestone.year}</div>
          <div className={styles.label}>{milestone.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
