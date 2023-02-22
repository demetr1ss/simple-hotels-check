import styles from './hotel-card.module.css';

export default function HotelCard() {
  return (
    <li className={styles.item}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.itemTitle}>Moscow Marriott Grand Hotel</h3>
        <button className={styles.button} type='button'>
          <span className='visually-hidden'>Удалить из избранного.</span>
          <svg xmlns='http://www.w3.org/2000/svg' width='21' height='18' fill='none' viewBox='0 0 21 18'>
            <path
              fill='#E55858'
              d='M19.38 1.591A5.533 5.533 0 0 0 17.589.414a5.61 5.61 0 0 0-4.23 0c-.671.273-1.28.673-1.793 1.177L10.5 2.638 9.435 1.59A5.576 5.576 0 0 0 5.527.001a5.576 5.576 0 0 0-3.908 1.59A5.384 5.384 0 0 0 0 5.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L10.5 18l7.816-7.681 1.065-1.047a5.423 5.423 0 0 0 1.198-1.762 5.348 5.348 0 0 0 0-4.157 5.423 5.423 0 0 0-1.198-1.762Z'
            />
          </svg>
        </button>
      </div>
      <div className={styles.dateWrapper}>
        <span className={styles.date}>28 June, 2020</span>
        <span className={styles.dateCount}>1 день</span>
      </div>
      <div className={styles.featuresWrapper}>
        <div className={styles.ratingStars}>
          {/* convertRatingToPercent(rating) */}
          <span style={{width: '65%'}}></span>
          <span className='visually-hidden'>Rating.</span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.priceTitle}>Price:</span>
          <span className={styles.price}>23 924 ₽</span>
        </div>
      </div>
    </li>
  );
}
