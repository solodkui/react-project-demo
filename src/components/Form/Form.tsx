// * Base
import { FormEvent, useReducer, useState } from 'react';
import reducer from './Form.state';
import { Link } from 'react-router-dom';
import { LIST } from './Form.data';

// * Components
import Button from '../Button/Button';
import Input from '../Input/Input';
import Card from '../Card/Card';

// * Styles
import styles from './Form.module.css';

function Form() {
  const [state, dispatch] = useReducer(reducer, { age: 0 });
  const [entries, setEntries] = useState<{ [k: string]: FormDataEntryValue }>({});

  const checkEntries = () => {
    console.log('ENTRIES: ', entries);
    console.log('state: ', state);

    const test = false;

    if (test) {
      dispatch({ type: 'incremented_age' });
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEntries(Object.fromEntries(new FormData(e.target as HTMLFormElement).entries()));
    checkEntries();
  };

  return (
    <Card>
      <form onSubmit={submit} className={styles.form}>
        {LIST.map((item) => (
          <Input key={item.name} type={item.type} title={item.title} name={item.name} />
        ))}
        <Access />
        <Button type='submit' title='Відправити' text='Відправити' className={[styles.button]} />
      </form>
    </Card>
  );
}

function Access() {
  return (
    <div className={styles.access}>
      <Input type='checkbox' name='access' />
      <span>Надсилаючи цю форму, я приймаю</span>
      <Link to='/privacy-policy' className={styles.link} target='_blank'>
        Політику конфіденційності
      </Link>
    </div>
  );
}

export default Form;
