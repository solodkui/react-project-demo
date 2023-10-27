// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './UsefulLinks.module.css';

function UsefulLinks() {
  useTitle({ title: 'Посилання' });

  return (
    <section className={styles.usefullinks}>
      <Wrapper>
        <h1>Посилання</h1>
      </Wrapper>
    </section>
  );
}

export default UsefulLinks;
