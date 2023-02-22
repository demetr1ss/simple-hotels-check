import LoginForm from '../../components/login-form/login-form';
import styles from './login-screen.module.css';

export default function LoginScreen() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}
