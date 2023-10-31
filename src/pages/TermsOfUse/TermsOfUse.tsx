// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './TermsOfUse.module.css';

// * Static
const TITLE = 'Умови використання';

function TermsOfUse() {
  useTitle({ title: TITLE });

  return (
    <section className={styles.termsOfUse}>
      <Wrapper>
        <h1>{TITLE}</h1>
      </Wrapper>
    </section>
  );
}

export default TermsOfUse;
