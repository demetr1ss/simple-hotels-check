import styles from './locations.module.css';

export default function Locations() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <label>
          <span className={styles.inputlabel}>Локация</span>
          <input className={styles.input} type='text' defaultValue={'Москва'} />
        </label>
        <label>
          <span className={styles.inputlabel}>Дата заселения</span>
          <input className={styles.input} type='date' />
        </label>
        <label>
          <span className={styles.inputlabel}>Количество дней</span>
          <input className={styles.input} type='number' defaultValue={1} />
        </label>
        <button className={styles.button} type='submit'>
          Найти
        </button>
      </form>
    </section>
  );
}

