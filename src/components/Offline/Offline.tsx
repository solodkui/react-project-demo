// * Styles
import styles from './Offline.module.css';

function Offline() {
  return (
    <div className={styles.offline}>
      <h1 className={styles.title}>Упс, схоже у вас відсутній інтернет!</h1>
    </div>
  );
}

export default Offline;
