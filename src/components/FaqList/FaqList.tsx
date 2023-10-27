// * Base
import LIST from './FaqList.data';

// * Styles
import styles from './FaqList.module.css';

function FaqList() {
  return (
    <ul className={styles.faqList}>
      {LIST.map(({ title, text }) => (
        <li key={'Faq-' + title} className={styles.item}>
          <h3 className={styles.subtitle}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default FaqList;
