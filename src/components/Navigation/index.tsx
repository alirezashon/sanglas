import styles from './index.module.scss';

const EventCountdown = () => {
  return (
    <div className={styles.eventCountdown}>
      <div className={styles.dateBox}>
        <div className={styles.number}>1</div>
        <div className={styles.label}>Year</div>
      </div>
      <div className={styles.dateBox}>
        <div className={styles.number}>7</div>
        <div className={styles.label}>Months</div>
      </div>
      <div className={styles.dateBox}>
        <div className={styles.number}>24</div>
        <div className={styles.label}>Days</div>
      </div>
    </div>
  );
};

export default EventCountdown;
