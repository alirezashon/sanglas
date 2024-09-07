import { Instagram, Linkedin, TikTok, X } from '../Icons'
import styles from './index.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h1 className={styles.logo}>
            SAN <span className={styles.glas}>GLAS</span>
          </h1>
          <p>1210 Wien, Ruthnergasse</p>
        </div>

        <div className={styles.links}>
          <a href='#'>Datenschutz</a>
          <a href='#'>Impressum</a>
        </div>

        <div className={styles.socialIcons}>
          <TikTok />
          <Linkedin />
          <Instagram />
          <X />
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; 2024 Sanglas, alle Rechte vorbehalten.</p>

        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <p>Subscribe for the latest updates.</p>
          <form>
            <input type='email' placeholder='you@company.com' />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
export default Footer
