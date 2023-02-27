import {hotelsCountTitles, createLabel} from '../../utils/utils';
import styles from './favorites-count.module.css';

type FavoritesCountPropsType = {
  favoriteHotelsCount: number;
};

export default function FavoritesCount({favoriteHotelsCount}: FavoritesCountPropsType) {
  return (
    <p className={styles.favoritesCount}>
      Добавлено в Избранное: <span className={styles.count}>{favoriteHotelsCount}</span>{' '}
      {createLabel(favoriteHotelsCount, hotelsCountTitles)}
    </p>
  );
}
