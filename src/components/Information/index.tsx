import styles from './index.module.scss'
const Information = () => {
  const info = [
    {
      title: 'Inspiration',
      description: 'FC Sanglas inspired us to build...',
      iconSrc: '/icons/inspiration.svg',
    },
    {
      title: 'Community Engagement',
      description: 'High demand from 200 clubs...',
      iconSrc: '/icons/community.svg',
    },
    {
      title: 'Purpose',
      description: 'To build versatile football halls...',
      iconSrc: '/icons/purpose.svg',
    },
    {
      title: 'Benefits',
      description: 'Supports local football growth...',
      iconSrc: '/icons/benefits.svg',
    },
    {
      title: 'Climate Protection',
      description: 'Some text about climate...',
      iconSrc: '/icons/climate.svg',
    },
  ]

  return (
    <div className={styles.infoCards}>
      {info.map((card, index) => (
        <div key={index} className={styles.card}>
          <img src={card.iconSrc} alt={card.title} className={styles.icon} />
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
        </div>
      ))}
    </div>
  )
}
export default Information
