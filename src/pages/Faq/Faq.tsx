// * Base
import useTitle from '../../hooks/use-title.hook';
import { BREADCRUMBS_LIST } from './Faq.data';
import { memo } from 'react';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';
import FaqList from '../../components/FaqList/FaqList';
import Card from '../../components/Card/Card';

// * Styles
import styles from './Faq.module.css';

function Faq() {
  const title = useTitle({ title: 'Часто задаваємі питання' });

  return (
    <div className={styles.faq}>
      <Wrapper>
        <Card>
          <Breadcrumbs list={BREADCRUMBS_LIST} />
          <h1 className={styles.title}>{title}</h1>
          <FaqList />
        </Card>
      </Wrapper>
    </div>
  );
}

export default memo(Faq);
