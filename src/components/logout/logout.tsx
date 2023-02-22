import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/const';
import styles from './logout.module.css';

export default function Logout() {
  return (
    <Link className={styles.link} to={AppRoute.Login}>
      <span className={styles.linkText}>Выйти</span>
      <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 22 22'>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2.2'
          d='M8 20H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4M15 16l5-5-5-5M20 11H8'
        />
      </svg>
    </Link>
  );
}
