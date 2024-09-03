import Image from 'next/image'
import styles from './index.module.scss'

const sources = [
  '/images/logo.svg',
  '/images/logo1.svg',
  '/images/logo2.svg',
  '/images/logo3.svg',
]
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      {sources.map((src) => (
        <div className={styles.logo}>
          <Image src={src} alt='logo' width={222} height={80} />
        </div>
      ))}
    </div>
  )
}

export default Navigation
