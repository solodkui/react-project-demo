// * Base
import { useId, memo } from 'react';
import cn from 'classnames';

// * Styles
import styles from './Input.module.css';

interface TProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  error?: string;
}

const Input = memo(function ({ type, title = '', value, error, onChange }: TProps) {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.title} title={title}>
        {title}
      </label>
      <input onChange={onChange} type={type} className={cn([styles.input, error && styles.error])} id={id} value={value} />
      <b className={styles.errorText}>{error || ''}</b>
    </div>
  );
});

export default Input;
