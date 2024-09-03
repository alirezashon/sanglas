import Image from 'next/image'
import styles from './index.module.scss'
import { Sanglas } from '../Icons'
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sunglassText}>
          <Sanglas />
        </div>
        <div className={styles.textBox}>
          <h1>Sunglas Sportarena</h1>
          <p>
            A place for passion, play and community spirit – Coming soon to
            Vienna
          </p>
          <button className={styles.button}>Stay Updated</button>
        </div>
        <div className={styles.mainImageBorder}>
          <Image
            className={styles.image}
            src={'/images/main.svg'}
            width={999}
            height={999}
            alt='Sunglas Sportarena image'
          />
        </div>
      </div>
    </>
  )
}
export default Header
