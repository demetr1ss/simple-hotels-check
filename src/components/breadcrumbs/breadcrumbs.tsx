import styles from './breadcrumbs.module.css';

export default function Breadcrumbs() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.link}>Отели</span>
      <span className={styles.link}>Москва</span>
    </div>
  );
}
