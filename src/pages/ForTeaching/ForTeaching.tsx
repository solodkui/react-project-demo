// * Base
import useTitle from '../../hooks/use-title.hook';
import BASE from '../../helpers/base';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './ForTeaching.module.css';

const TITLE = `Викладайте на ${BASE.projectName}`;

function ForTeaching() {
  useTitle({ title: TITLE });

  return (
    <section className={styles.forTeaching}>
      <Wrapper>
        <h1>{TITLE}</h1>
      </Wrapper>
    </section>
  );
}

export default ForTeaching;
