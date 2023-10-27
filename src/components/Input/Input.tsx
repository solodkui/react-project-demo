// * Base
import { ChangeEvent, useId, useState } from 'react';

// * Styles
import styles from './Input.module.css';
import Icon from '../Icon/Icon';
import cn from 'classnames';

interface TProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

function Input({ type, title = '', name }: TProps) {
  const id = useId();

  if (type === 'checkbox') {
    return <Checkbox name={name} />;
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.title} title={title}>
        {title}
      </label>
      {type === 'tel' ? <Phone type={type} name={name} id={id} /> : <input type={type} className={styles.input} id={id} name={name} />}
      <b className={styles.error}></b>
    </div>
  );
}

function Phone({ type, name, id }: Omit<TProps, 'title'>) {
  const [value, setValue] = useState<string>('+380');

  const checkTell = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('+' + e.target.value.replace(/[^0-9]/g, '').slice(0, 12));
  };

  return <input value={value} onChange={checkTell} type={type} className={styles.input} id={id} name={name} />;
}

function Checkbox({ name }: { name?: string }) {
  const [value, setValue] = useState<boolean>(false);

  return (
    <label className={styles.label}>
      <Icon icon='check' className={cn([styles.icon, value && styles.show])} />
      <input onClick={() => setValue(!value)} type='checkbox' name={name} className={styles.checkbox} />
    </label>
  );
}

export default Input;
