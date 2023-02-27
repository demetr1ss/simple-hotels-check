import styles from './location-form.module.css';
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../hooks';
import {QueryParamsType} from '../../types/types';
import {fetchHotels, setQueryParams} from '../../store/app-process/app-process';
import {locationRegExp} from '../../const/const';
import cn from 'classnames';

type LocationFormPropsType = {
  location: string;
  checkIn: string;
  duration: number;
};

export default function LocationForm({location, checkIn, duration}: LocationFormPropsType) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<QueryParamsType>({
    mode: 'all',
  });

  const onSubmit = (data: QueryParamsType) => {
    dispatch(setQueryParams(data));
    dispatch(fetchHotels());
  };

  const locationInputClassName = cn(styles.input, {
    [styles.error]: errors?.location
  });

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span className={styles.inputLabel}>Локация</span>
          <input
            className={locationInputClassName}
            type='text'
            defaultValue={location}
            required
            placeholder='Город'
            {...register('location', {
              pattern: locationRegExp,
            })}
          />
        </label>
        <label>
          <span className={styles.inputLabel}>Дата заселения</span>
          <input
            className={styles.input}
            type='date'
            defaultValue={checkIn}
            placeholder='дд.мм.гггг'
            required
            min={new Date().toLocaleDateString('en-CA')}
            {...register('checkIn')}
          />
        </label>
        <label>
          <span className={styles.inputLabel}>Количество дней</span>
          <input
            className={styles.input}
            type='number'
            defaultValue={Number(duration)}
            placeholder='Укажите кол-во дней'
            required
            min={1}
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
