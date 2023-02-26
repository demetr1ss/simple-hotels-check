import cn from 'classnames';
import {useAppDispatch} from '../../hooks';
import {changeFavoriteHotelStatus} from '../../store/app-process/app-process';
import {HotelType} from '../../types/types';
import {convertRatingToPercent, createLabel} from '../../utils/utils';
import styles from './hotel-card.module.css';

type HotelCardPropsType = {
  hotel: HotelType;
  isBig?: boolean;
  checkIn: string;
  duration: string;
};

export default function HotelCard({isBig, hotel, checkIn, duration}: HotelCardPropsType) {
  const dispatch = useAppDispatch();
  const date = new Date(checkIn)
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);

  const cardClassName = cn(styles.item, {
    [styles.bigCard]: isBig,
  });

  const favoriteButtonClassName = cn(styles.button, {
    [styles.isFavorite]: hotel.isFavorite,
  });

  return (
    <li className={cardClassName}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.itemTitle}>{hotel.hotelName}</h3>
        <button
          className={favoriteButtonClassName}
          type='button'
          onClick={() => dispatch(changeFavoriteHotelStatus(hotel))}
        >
          <span className='visually-hidden'>
            {hotel.isFavorite ? 'Удалить из избранного.' : 'Добавить в избранное.'}.
          </span>
          <svg xmlns='http://www.w3.org/2000/svg' width='23' height='20' fill='none' viewBox='0 0 23 20'>
            <path
              fill='#fff'
              stroke='#c4c4c4'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M20.38 2.591a5.533 5.533 0 0 0-1.792-1.177 5.61 5.61 0 0 0-4.23 0c-.671.273-1.28.673-1.793 1.177L11.5 3.638 10.435 2.59a5.576 5.576 0 0 0-3.908-1.59 5.576 5.576 0 0 0-3.908 1.59A5.384 5.384 0 0 0 1 6.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L11.5 19l7.816-7.681 1.065-1.047a5.423 5.423 0 0 0 1.198-1.762 5.348 5.348 0 0 0 0-4.157 5.423 5.423 0 0 0-1.198-1.762Z'
            />
          </svg>
        </button>
      </div>
      <div className={styles.dateWrapper}>
        <span className={styles.date}>{date}</span>
        <span className={styles.dateCount}>{`${duration} ${createLabel(Number(duration))}`}</span>
      </div>
      <div className={styles.featuresWrapper}>
        <div className={styles.ratingStars}>
          <span style={{width: convertRatingToPercent(hotel.stars)}}></span>
          <span className='visually-hidden'>Rating.</span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.priceTitle}>Price:</span>
          <span className={styles.price}>{hotel.priceAvg} ₽</span>
        </div>
      </div>
    </li>
  );
}
