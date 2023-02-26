import styles from './favorites.module.css';
import cn from 'classnames';
import {MouseEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getSortedFavoriteHotels} from '../../store/app-process/selectors';
import HotelCard from '../hotel-card/hotel-card';
import {changeSort} from '../../store/app-process/app-process';
import {SortingOption} from '../../const/const';
import {switchButton} from '../../utils/utils';

export default function Favorites() {
  const favoriteHotels = useAppSelector(getSortedFavoriteHotels);
  const dispatch = useAppDispatch();
  const [activeButton, setIsActiveButton] = useState(SortingOption.Default as string);

  useEffect(() => {
    switch (activeButton) {
      case SortingOption.Default:
        break;
      case SortingOption.AscendingPrice:
        dispatch(changeSort(SortingOption.AscendingPrice));
        break;
      case SortingOption.DescendingPrice:
        dispatch(changeSort(SortingOption.DescendingPrice));
        break;
      case SortingOption.DescendingRating:
        dispatch(changeSort(SortingOption.DescendingRating));
        break;
      case SortingOption.AscendingRating:
        dispatch(changeSort(SortingOption.AscendingRating));
        break;
      default:
        throw new Error(`${activeButton} not exist`);
    }
  }, [activeButton, dispatch]);

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    let currentSortValue: SortingOption;
    const {buttonValue} = evt.currentTarget.dataset;

    if (activeButton === buttonValue) {
      currentSortValue = switchButton(buttonValue);
      setIsActiveButton(currentSortValue);
    } else {
      setIsActiveButton(buttonValue as SortingOption);
    }
  };

  const priceButtonClassName = cn(styles.button, {
    [styles.buttonActive]:
      activeButton === SortingOption.AscendingPrice || activeButton === SortingOption.DescendingPrice,
    [styles.asc]: activeButton === SortingOption.AscendingPrice,
    [styles.desc]: activeButton === SortingOption.DescendingPrice,
  });

  const ratingButtonClassName = cn(styles.button, {
    [styles.buttonActive]:
      activeButton === SortingOption.AscendingRating || activeButton === SortingOption.DescendingRating,
    [styles.asc]: activeButton === SortingOption.AscendingRating,
    [styles.desc]: activeButton === SortingOption.DescendingRating,
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Избранное</h2>
      <div className={styles.controls}>
        <button
          className={ratingButtonClassName}
          type='button'
          data-button-value={SortingOption.DescendingRating}
          onClick={handleButtonClick}
        >
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
        <button
          className={priceButtonClassName}
          type='button'
          data-button-value={SortingOption.AscendingPrice}
          onClick={handleButtonClick}
        >
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
