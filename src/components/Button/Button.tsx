// * Base
import { Link } from 'react-router-dom';

// * Styles
import styles from './Button.module.css';

type TProps = {
  type?: 'button' | 'submit' | 'reset';
  title: string;
  href?: string;
  text: string;
};

function Button({ href, text, type, title }: TProps) {
  if (href) {
    return (
      <Link to={href} title={title} className={styles.button}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} title={title} className={styles.button}>
      <span>{text}</span>
    </button>
  );
}

export default Button;
