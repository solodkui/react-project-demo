// * Base
import useTitle from '../../hooks/use-title.hook';
import { BREADCRUMBS_LIST } from './Support.data';
import { memo } from 'react';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Support.module.css';

function Support() {
  const title = useTitle({ title: 'Підтримка' });

  return (
    <section className={styles.support}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1 className={styles.title}>{title}</h1>
      </Wrapper>
    </section>
  );
}

export default memo(Support);
