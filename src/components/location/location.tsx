import styles from './location.module.css';
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../hooks';
import {QueryParamsType} from '../../types/types';
import {fetchHotels, setQueryParams} from '../../store/app-process/app-process';

type LocationPropsType = {
  location: string;
  checkInDate: string;
  duration: string;
};

export default function Location({location, checkInDate, duration}: LocationPropsType) {
  const dispatch = useAppDispatch();
  const {register, handleSubmit} = useForm<QueryParamsType>({
    mode: 'all',
  });

  const onSubmit = (data: QueryParamsType) => {
    dispatch(setQueryParams(data));
    dispatch(fetchHotels());
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className={styles.inputlabel}>Локация</span>
          <input
            className={styles.input}
            type='text'
            defaultValue={location}
            placeholder={'Город'}
            {...register('location')}
          />
        </label>
        <label>
          <span className={styles.inputlabel}>Дата заселения</span>
          <input
            className={styles.input}
            type='date'
            defaultValue={checkInDate}
            placeholder={'дд.мм.гггг'}
            {...register('checkIn')}
          />
        </label>
        <label>
          <span className={styles.inputlabel}>Количество дней</span>
          <input
            className={styles.input}
            type='number'
            defaultValue={duration}
            placeholder={'1'}
            {...register('duration')}
          />
        </label>
        <button className={styles.button} type='submit'>
          Найти
        </button>
      </form>
    </section>
  );
}
