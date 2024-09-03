import Image from 'next/image'
import styles from './index.module.scss'
const Information = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inspiration}>
        <h1>Inspiration</h1>

        <p>
          FC Sanglas, successful in small-sided football since 2015, inspired us
          to build dedicated facilities.
        </p>
        <Image
          className={styles.icon}
          src={'/images/thinker.svg'}
          alt=''
          width={999}
          height={333}
        />
      </div>
      <div className={styles.community}>
        <h1>Community Engagement</h1>
        <p>
          High demand from 200 clubs and 3,000 players shows the need for more
          small-sided football spaces.
        </p>
      </div>
        <Image
          className={`${styles.icon} ${styles.imageSection}`}
          src={'/images/sportarena.svg'}
          alt=''
          width={999}
          height={333}
        />
      <div className={styles.purpose}>
        <h1>Purpose</h1>

        <p>
          To build versatile football halls for clubs, schools, businesses, and
          private rentals.{' '}
        </p>
        <Image
          className={styles.icon}
          src={'/icons/purpose.svg'}
          alt=''
          width={999}
          height={333}
        />
      </div>
      <div className={styles.benefits}>
        <h1>Benefits</h1>

        <p>
      Supports local football growth, enhances infrastructure, and offers flexible space.  
        </p>
        <Image
          className={styles.icon}
          src={'/icons/benefits.svg'}
          alt=''
          width={999}
          height={333}
        />
      </div>
{/*     
      <div className={styles.protection}>
        <h1>Climate Protection</h1>

        <p>
        We prioritize combining climate protection with energy generation in Vienna, focusing on insulation, ventilation, heat pumps, solar energy, and rainwater harvesting.
        </p>
        <Image
          className={styles.icon}
          src={'/icons/climate.svg'}
          alt=''
          width={999}
          height={333}
        />
      </div> */}
    </div>
  )
}
export default Information
