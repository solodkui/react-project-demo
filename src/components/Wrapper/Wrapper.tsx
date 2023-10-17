// * Base
import cn from 'classnames';

// * Styles
import styles from './Wrapper.module.css';

type TProps = {
  children: React.ReactNode;
  className?: string[];
};

function Wrapper({ children, className = [] }: TProps) {
  return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
}

export default Wrapper;
