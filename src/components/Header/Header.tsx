// * Base
import { useEffect, useState } from 'react';
import cn from 'classnames';

// * Components
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';

// * Styles
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/store';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isWhite = useSelector((s: TRootState) => s.header.isWhite);

  const checkScroll = () => setIsOpen(!!window.scrollY);

  useEffect(() => {
    document.addEventListener('scroll', checkScroll);
    return () => {
      document.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <header className={cn([styles.header, isOpen && styles.open, isWhite && styles.white])}>
      <Wrapper className={[styles.wrapper]}>
        <Logo smallMode={isOpen} />
        <Navigation />
      </Wrapper>
    </header>
  );
}

export default Header;
