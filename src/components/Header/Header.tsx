// * Base
import cn from 'classnames';

// * Styles
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={cn('wrapper', styles.wrapper)}>
        {/* TODO Need Logo component */}
        <span>LOGO</span>
        {/* TODO Need Navigation component */}
        <p>NAVIGATION</p>
      </div>
    </header>
  );
}

export default Header;
