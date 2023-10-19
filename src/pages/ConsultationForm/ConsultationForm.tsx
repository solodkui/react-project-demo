// * Base
import useTitle from '../../hooks/use-title.hook';
import { FormEvent } from 'react';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

// * Styles
import styles from './ConsultationForm.module.css';
import Input from '../../components/Input/Input';

function ConsultationForm() {
  useTitle({ title: 'Форма консультації' });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);

    const entries = Object.fromEntries(form.entries());
    console.log('entries: ', entries);
  };

  return (
    <div className={styles.consultationForm}>
      <Wrapper className={[styles.wrapper]}>
        <div className={styles.text}>
          <h1 className={styles.title}>Форма консультації</h1>
          <p className={styles.subtitle}>Заповніть анкету і отримайте безкоштовну пораду з питань освіти в Академії та майбутньої кар'єри в ІТ.</p>
        </div>

        <Card>
          <form onSubmit={submit} className={styles.form}>
            <Input type='text' title='Ім’я' name='name' />
            <Input type='email' title='Емейл' name='email' />
            <div className={styles.formFooter}>
              <Button type='submit' title='Відправити' text='Відправити' />
            </div>
          </form>
        </Card>
      </Wrapper>
    </div>
  );
}

export default ConsultationForm;
