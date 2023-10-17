// * Base
import LIST from './Faq.data';

// * Components
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './Faq.module.css';

function Faq() {
  return (
    <section className={styles.faq}>
      <Wrapper className={[styles.wrapper]}>
        <h2 className={styles.title}>Часто задаваємі питання</h2>
        <ul className={styles.list}>
          {LIST.map(({ title, text }) => (
            <li key={'Faq-' + title} className={styles.item}>
              <h3 className={styles.subtitle}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}

export default Faq;
