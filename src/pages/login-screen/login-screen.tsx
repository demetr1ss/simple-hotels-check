import LoginForm from '../../components/login-form/login-form';
import styles from './login-screen.module.css';

export default function LoginScreen() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.container}>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
