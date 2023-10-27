// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './TermsOfUse.module.css';

function TermsOfUse() {
  useTitle({ title: 'Правила використання' });

  return (
    <section className={styles.termsOfUse}>
      <Wrapper>
        <h1>Правила використання</h1>
      </Wrapper>
    </section>
  );
}

export default TermsOfUse;
