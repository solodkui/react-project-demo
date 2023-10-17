// * Base
import cn from 'classnames';

// * Styles
import styles from './Background.module.css';

function Background() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <div className={cn([styles.circle, styles.circle_1])}></div>
    </div>
  );
}

export default Background;
