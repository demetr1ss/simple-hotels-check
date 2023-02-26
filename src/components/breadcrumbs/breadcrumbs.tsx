import styles from './breadcrumbs.module.css';

type BreadcrumbsPropsType = {
  location: string;
};

export default function Breadcrumbs({location}: BreadcrumbsPropsType) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.link}>Отели</span>
      <span className={styles.link}>{location}</span>
    </div>
  );
}
