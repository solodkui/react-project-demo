// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';
import Card from '../../components/Card/Card';

// * Styles
import styles from './Faq.module.css';
import FaqList from '../../components/FaqList/FaqList';

function Faq() {
  useTitle({ title: 'Часто задаваємі питання' });

  return (
    <div className={styles.faq}>
      <Wrapper>
        <Card>
          <h1 className={styles.title}>Часто задаваємі питання</h1>
          <FaqList />
        </Card>
      </Wrapper>
    </div>
  );
}

export default Faq;
