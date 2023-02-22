import styles from './main-screen.module.css';
import Header from '../../components/header/header';
import Favorites from '../../components/favorites/favorites';
import Hotels from '../../components/hotels/hotels';
import Locations from '../../components/locations/locations';

export default function MainScreen() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.wrapper}>
        <Locations />
        <Favorites />
        <Hotels />
      </section>
    </main>
  );
}
