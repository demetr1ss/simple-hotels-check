import HotelCard from '../hotel-card/hotel-card';
import styles from './favorites.module.css';
import cn from 'classnames';
import {MouseEvent, useState} from 'react';

export default function Favorites() {
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
        <HotelCard hotel={{
          location: {
            country: '',
            geo: {
              lon: 0,
              lat: 0
            },
            state: null,
            name: ''
          },
          priceAvg: 0,
          pricePercentile: {
            3: 0,
            10: 0,
            35: 0,
            50: 0,
            75: 0,
            99: 0
          },
          hotelName: '',
          stars: 0,
          locationId: 0,
          hotelId: 0,
          priceFrom: 0
        }} checkInDate={''} duration={''} />
        <HotelCard hotel={{
          location: {
            country: '',
            geo: {
              lon: 0,
              lat: 0
            },
            state: null,
            name: ''
          },
          priceAvg: 0,
          pricePercentile: {
            3: 0,
            10: 0,
            35: 0,
            50: 0,
            75: 0,
            99: 0
          },
          hotelName: '',
          stars: 0,
          locationId: 0,
          hotelId: 0,
          priceFrom: 0
        }} checkInDate={''} duration={''} />
        <HotelCard hotel={{
          location: {
            country: '',
            geo: {
              lon: 0,
              lat: 0
            },
            state: null,
            name: ''
          },
          priceAvg: 0,
          pricePercentile: {
            3: 0,
            10: 0,
            35: 0,
            50: 0,
            75: 0,
            99: 0
          },
          hotelName: '',
          stars: 0,
          locationId: 0,
          hotelId: 0,
          priceFrom: 0
        }} checkInDate={''} duration={''} />
      </ul>
    </section>
  );
}
