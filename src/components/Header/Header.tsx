// * Base
import cn from 'classnames';

// * Components
import Logo from '../Logo/Logo';

// * Styles
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={cn('wrapper', styles.wrapper)}>
        <Logo />
        {/* TODO Need Navigation component */}
        <p>NAVIGATION</p>
      </div>
    </header>
  );
}

export default Header;
