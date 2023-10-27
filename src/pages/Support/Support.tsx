// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Support.module.css';

function Support() {
  useTitle({ title: 'Підтримка' });

  return (
    <section className={styles.support}>
      <Wrapper>
        <h1>Підтримка</h1>
      </Wrapper>
    </section>
  );
}

export default Support;
