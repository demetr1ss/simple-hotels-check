import styles from './login-form.module.css';
import FocusLock from 'react-focus-lock';
import {useForm} from 'react-hook-form';
import cn from 'classnames';
import {emailRegExp, passwordRegExp} from '../../const/const';
import {useAppDispatch} from '../../hooks';
import {logIn} from '../../store/user-process/user-process';

export type UserDataType = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<UserDataType>({
    mode: 'all',
  });

  const loginLabelClassName = cn('login', {
    [styles.labelError]: errors.email,
  });

  const passwordLabelClassName = cn('password', {
    [styles.labelError]: errors.password,
  });

  const onSubmit = (data: UserDataType) => {
    data && dispatch(logIn(data.email));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Simple Hotel Check</h2>
      <FocusLock>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={loginLabelClassName}>
            <span className={styles.inputlabel}>Логин</span>
            <input
              className={styles.input}
              type='email'
              autoComplete='new-password'
              {...register('email', {
                required: true,
                pattern: emailRegExp,
              })}
            />
            {errors?.email && <span className={styles.error}>invalid email</span>}
          </label>
          <label className={passwordLabelClassName}>
            <span className={styles.inputlabel}>Пароль</span>
            <input
              className={styles.input}
              type='password'
              autoComplete='new-password'
              {...register('password', {
                required: true,
                pattern: passwordRegExp,
                minLength: 8
              })}
            />
            {errors?.password && <span className={styles.error}>invalid password. </span>}
          </label>
          <button className={styles.button} type='submit'>
            Войти
          </button>
        </form>
      </FocusLock>
    </div>
  );
}
