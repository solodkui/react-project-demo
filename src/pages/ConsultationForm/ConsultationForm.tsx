// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';
import Form from '../../components/Form/Form';

// * Styles
import styles from './ConsultationForm.module.css';

function ConsultationForm() {
  useTitle({ title: 'Форма консультації' });

  return (
    <div className={styles.consultationForm}>
      <Wrapper className={[styles.wrapper]}>
        <div>
          <h1 className={styles.title}>Форма консультації</h1>
          <p className={styles.subtitle}>Заповніть анкету і отримайте безкоштовну пораду з питань освіти в Академії та майбутньої кар'єри в ІТ.</p>
        </div>
        <Form />
      </Wrapper>
    </div>
  );
}

export default ConsultationForm;
