import styles from './favorites.module.css';
import cn from 'classnames';
import {MouseEvent, useState} from 'react';
import {useAppSelector} from '../../hooks';
import {getFavoriteHotels} from '../../store/app-process/selectors';
import HotelCard from '../hotel-card/hotel-card';

export default function Favorites() {
  const favoriteHotels = useAppSelector(getFavoriteHotels);
  const [activeButton, setIsActiveButton] = useState('');

  const priceButtonClassName = cn(styles.button, {
    [styles.buttonActive]: activeButton === 'price',
  });

  const ratingButtonClassName = cn(styles.button, {
    [styles.buttonActive]: activeButton === 'rating',
  });

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    setIsActiveButton(evt.currentTarget.name);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.controls}>
        <button className={ratingButtonClassName} type='button' name='rating' onClick={handleButtonClick}>
          Рейтинг
          <svg width='9' height='13' viewBox='0 0 9 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              className={styles.topArrowSvg}
              d='M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.014719 4.24264L4.25736 0L8.5 4.24264Z'
              fill='currentColor'
            />
            <path
              className={styles.bottomArrowSvg}
              d='M8.5 7.83247L7.43934 6.77181L4.25736 9.95379L1.07538 6.77181L0.014719 7.83247L4.25736 12.0751L8.5 7.83247Z'
              fill='currentColor'
            />
          </svg>
        </button>
        <button className={priceButtonClassName} type='button' name='price' onClick={handleButtonClick}>
          Цена
          <svg
            width='9'
            height='13'
            viewBox='0 0 9 13'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className={styles.topArrowSvg}
              d='M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.014719 4.24264L4.25736 0L8.5 4.24264Z'
              fill='currentColor'
            />
            <path
              className={styles.bottomArrowSvg}
              d='M8.5 7.83247L7.43934 6.77181L4.25736 9.95379L1.07538 6.77181L0.014719 7.83247L4.25736 12.0751L8.5 7.83247Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
      <ul className={styles.list}>
        {favoriteHotels.map((hotel) => (
          <HotelCard key={hotel.hotelId} hotel={hotel} checkIn={hotel.checkIn} duration={hotel.duration} />
        ))}
      </ul>
    </section>
  );
}
