// * Base
import { memo } from 'react';

// * Styles
import styles from './Burger.module.css';
import cn from 'classnames';

function Burger({ isOpen, changeIsOpen }: { isOpen: boolean; changeIsOpen: () => void }) {
  return (
    <button type="button" className={cn([styles.burger, isOpen && styles.open])} onClick={changeIsOpen}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}

export default memo(Burger);
