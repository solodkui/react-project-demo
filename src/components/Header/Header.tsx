// * Base
import cn from 'classnames';

// * Components
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

// * Styles
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={cn('wrapper', styles.wrapper)}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
