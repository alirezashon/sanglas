import Image from 'next/image'
import styles from './index.module.scss'

const Information = () => {
  return (
    <>
      <div className={styles.topSection}>
        <div className={`${styles.section} ${styles.inspirationSection}`}>
          <h1>Inspiration</h1>
          <p>
            FC Sanglas, successful in small-sided football since 2015, inspired
            us to build dedicated facilities.
          </p>
          <Image
            className={styles.icon}
            src={'/images/thinker.svg'}
            alt='Inspiration Icon'
            width={80}
            height={80}
          />
        </div>

        <div className={styles.topRightSection}>
          <div className={`${styles.section} ${styles.communitySection}`}>
            <h1>Community Engagement</h1>
            <p>
              High demand from 200 clubs and 3,000 players shows the need for
              more small-sided football spaces.
            </p>
          </div>

          <div className={styles.secondTopRightSection}>
            <div>
              <Image
                className={` ${styles.imageSection}`}
                src={'/images/sportarena.svg'}
                alt='Sport Arena'
                width={350}
                height={200}
              />
            </div>
            <div className={`${styles.section} ${styles.purposeSection}`}>
              <div className={styles.purposeText}>
                <h1>Purpose</h1>
                <p>
                  To build versatile football halls for clubs, schools,
                  businesses, and private rentals.
                </p>
              </div>
              <Image
                className={`${styles.purposeIcon}`}
                src={'/images/dart.svg'}
                alt='Purpose Icon'
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={`${styles.section} ${styles.benefitsSection}`}>
          <Image
            className={`${styles.icon} ${styles.benefitsIcon}`}
            src={'/images/fire.svg'}
            alt='Benefits Icon'
            width={80}
            height={80}
          />
          <div className={styles.benefitText}>
            <h1>Benefits</h1>
            <p>
              Supports local football growth, enhances infrastructure, and
              offers flexible space.
            </p>
          </div>
        </div>
        <div className={`${styles.section} ${styles.climateProtectionSection}`}>
          <div className={styles.climateProtectionText}>
            <h1>Climate Protection</h1>
            <p>
              We prioritize combining climate protection with energy generation
              in Vienna, focusing on insulation, ventilation, heat pumps, solar
              energy, and rainwater harvesting.
            </p>
          </div>

          <Image
            className={styles.icon}
            src={'/images/mountstar.svg'}
            alt='Climate Protection Icon'
            width={80}
            height={80}
          />
        </div>
      </div>
    </>
  )
}

export default Information
