// * Base
import { EType, INITIAL_STATE, TValues, reducer } from './Form.state';
import { FormEvent, useCallback, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST } from './Form.data';

// * Components
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Card from '../Card/Card';

// * Styles
import styles from './Form.module.css';

function Form() {
  const [state, dispatchState] = useReducer(reducer, INITIAL_STATE);
  const [access, setAccess] = useState<boolean>(false);

  const onChange = useCallback((name: TValues, value: string) => {
    dispatchState({ type: EType.SET_VALUE, payload: { name, value } });
  }, []);

  const reset = useCallback(() => dispatchState({ type: EType.RESET }), []);

  const submit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (access) {
        dispatchState({ type: EType.SUBMIT });
      }
    },
    [access],
  );

  return (
    <Card>
      <form onSubmit={submit} className={styles.form}>
        <button onClick={reset}>RESET</button>
        {LIST.map((item) => (
          <Input
            key={item.name}
            type={item.type}
            title={item.title}
            value={state.values[item.name].value}
            error={state.values[item.name].error}
            onChange={(e) => onChange(item.name, e.currentTarget.value?.trim())}
          />
        ))}
        <div className={styles.access}>
          <Checkbox value={access} onChange={() => setAccess((p) => !p)} />
          <span>Надсилаючи цю форму, я приймаю</span>
          <Link to="/privacy-policy" className={styles.link} target="_blank">
            Політику конфіденційності
          </Link>
        </div>
        <Button type="submit" title="Відправити" text="Відправити" className={[styles.button]} />
      </form>
    </Card>
  );
}

export default Form;
