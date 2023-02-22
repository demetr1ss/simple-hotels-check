import Logout from '../logout/logout';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Simple Hotel Check</h1>
        <Logout />
      </div>
    </header>
  );
}
