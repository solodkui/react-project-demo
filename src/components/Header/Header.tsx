// * Base
import { useCallback, useEffect, useState, memo } from 'react';
import { TRootState } from '../../store/store';
import { useSelector } from 'react-redux';
import cn from 'classnames';

// * Components
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';
import Burger from '../Burger/Burger';
import Logo from '../Logo/Logo';

// * Styles
import styles from './Header.module.css';

// * Types
import { EBreakpoint } from '../../types/breakpoint.types';

function Header() {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth),
    isWhite = useSelector((s: TRootState) => s.header.isWhite),
    [smallMode, setSmallMode] = useState<boolean>(false),
    [show, setShow] = useState<boolean>(false);

  const checkScroll = useCallback(() => {
    setSmallMode(!!window.scrollY);
  }, []);

  const resize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', checkScroll);
    return () => {
      document.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll]);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return (
    <header className={cn([styles.header, smallMode && styles.open, isWhite && styles.white])}>
      <Wrapper className={[styles.wrapper]}>
        <div className={styles.logo}>
          <Logo smallMode={innerWidth >= EBreakpoint.DESKTOP ? smallMode : false} onClick={() => setShow(false)} />
        </div>
        <Navigation show={show} close={() => setShow(false)} />
        {innerWidth < EBreakpoint.DESKTOP && <Burger isOpen={show} changeIsOpen={() => setShow((p) => !p)} />}
      </Wrapper>
    </header>
  );
}

export default memo(Header);
