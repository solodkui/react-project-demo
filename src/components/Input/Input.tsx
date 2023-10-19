// * Styles
import { useId } from 'react';
import styles from './Input.module.css';

interface TProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

function Input({ type, title, name }: TProps) {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.title} title={title}>
        {title}
      </label>
      <input type={type} className={styles.input} id={id} name={name} />
    </div>
  );
}

export default Input;
