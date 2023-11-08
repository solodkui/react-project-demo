// * Base
import FaqList from '../FaqList/FaqList';

// * Components
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './FaqContent.module.css';

function FaqContent() {
  return (
    <section className={styles.faqContent}>
      <Wrapper className={[styles.wrapper]}>
        <h2 className={styles.title}>Часто задаваємі питання</h2>
        <FaqList />
      </Wrapper>
    </section>
  );
}

export default FaqContent;
