// * Base
import { Link } from 'react-router-dom';
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

type TProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string[];
  color?: string;
  title: string;
  href?: string;
  text: string;
};

function Button({ href, text, type, title, color, className = [] }: TProps) {
  if (href) {
    return (
      <Link to={href} title={title} className={cn([styles.button, color && styles[color], ...className])}>
        <b>{text}</b>
      </Link>
    );
  }

  return (
    <button type={type} title={title} className={cn([styles.button, color && styles[color], ...className])}>
      <b>{text}</b>
    </button>
  );
}

export default Button;
